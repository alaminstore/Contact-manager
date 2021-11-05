import react, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id != id;
    });
    setContacts(newContactList);
  };

  return (
    <div className="App">
      <Header />
      <div className="ui container w-25">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <ContactList
                  {...props}
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              )}
            />
            <Route
              path="/add"
              exact
              render={(props) => (
                <AddContact {...props} addContactHandler={addContactHandler} />
              )}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

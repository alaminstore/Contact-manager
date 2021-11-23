import react, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import ContactDetail from "./components/ContactDetail";
import api from "./api/contacts";
import EditContact from "./components/EditContact";
function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts";
  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };
  //parse used to convert string into a object.
  //Cause When receiving data from a web server, the data is always a string.
  //retriveContact
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };
  useEffect(() => {
    // const retrieveContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // if (retrieveContacts) setContacts(retrieveContacts);
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
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
            <Route
              path="/edit"
              exact
              render={(props) => (
                <EditContact
                  {...props}
                  updateContactHandler={updateContactHandler}
                />
              )}
            />
            <Route path="/contact/:id" component={ContactDetail} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

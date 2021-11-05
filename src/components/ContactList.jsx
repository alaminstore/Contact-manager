import React from "react";
import { Button, Image, Item } from "semantic-ui-react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} />
    );
  });
  return (
    <div className="main">
      <h4>
        Contact List
        <Link to="/add">
          <button className="ui button basic right">Add Contact</button>
        </Link>
      </h4>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;

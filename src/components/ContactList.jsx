import React from "react";
import { Button, Image, Item } from "semantic-ui-react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact, index) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={index}
      />
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
      <div className="ui search">
        <div className="ui icon input mt-2">
          <input
            type="text"
            placeholder="Search Contact..."
            className="prompt"
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;

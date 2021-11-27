import React, { useRef } from "react";
import { Button, Image, Item } from "semantic-ui-react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  const inputEl = useRef("");
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
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
            ref={inputEl}
            type="text"
            placeholder="Search Contact..."
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No contact available"}
      </div>
    </div>
  );
};

export default ContactList;

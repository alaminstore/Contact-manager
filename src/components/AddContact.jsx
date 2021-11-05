import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Field must not be empty!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <Form onSubmit={this.add}>
        <Form.Field>
          <label> Name</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
        </Form.Field>
        <Button type="submit" className="ui green basic">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddContact;

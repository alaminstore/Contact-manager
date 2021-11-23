import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class EditContact extends Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
  }
  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Field must not be empty!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <Form onSubmit={this.update}>
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
          Update
        </Button>
      </Form>
    );
  }
}

export default EditContact;

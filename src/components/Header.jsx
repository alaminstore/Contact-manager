import React from "react";
import { Container, Menu } from "semantic-ui-react";
const Header = () => {
  return (
    <>
      <Menu className="center header  green">
        <div className="ui   mt-1 mb-1">
          <Container textAlign="center">
            <h2>Contact Manager</h2>
          </Container>
        </div>
      </Menu>
    </>
  );
};

export default Header;

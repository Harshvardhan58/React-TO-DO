import React, { Component } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">To-Do List</Navbar.Brand>
      </Navbar>
    );
  }
}

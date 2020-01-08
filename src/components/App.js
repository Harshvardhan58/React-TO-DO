import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Button, Form, Container, Row } from "react-bootstrap";
import MyNavbar from "./Navbar";
import TodoList from "./TodoList";
@observer
export default class App extends Component {
  @observable text = "hii";
  render() {
    return (
      <Container fluid>
        <MyNavbar />
        <Container style={{ marginTop: 20 }}>
          <TodoList />
        </Container>
      </Container>
    );
  }
}

//  <div>
//         <p>{this.text}</p>
//         <Form>
//           <Form.Control
//             value={this.text}
//             onChange={e => (this.text = e.target.value)}
//           />
//           <Button onClick={() => (this.text = "hii")}>Reset</Button>
//         </Form>
//       </div>

import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Button, Form } from "react-bootstrap";
@observer
export default class App extends Component {
  @observable text = "hii";
  render() {
    return (
      <div>
        <p>{this.text}</p>
        <Form>
          <Form.Control
            value={this.text}
            onChange={e => (this.text = e.target.value)}
          />
          <Button onClick={() => (this.text = "hii")}>Reset</Button>
        </Form>
      </div>
    );
  }
}

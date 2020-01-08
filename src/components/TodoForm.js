import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import TodoItemList from "../models/TodoItemList";
import { observer } from "mobx-react";

@observer
export default class TodoForm extends Component {
  render() {
    const { item, onAdd, onCancel } = this.props;
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={item.title}
              onChange={e => (item.title = e.target.value)}
              type="text"
              placeholder="Enter Title"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              value={item.priority}
              onChange={e => (item.priority = e.target.value)}
              type="number"
              placeholder="Priority"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={item.description}
            onChange={e => (item.description = e.target.value)}
            as={"textarea"}
            placeholder="Description"
          />
        </Form.Group>
        <Button
          style={{ margin: 10 }}
          onClick={() => {
            onAdd(item);
          }}
          variant="primary"
        >
          Save
        </Button>
        <Button style={{ margin: 10 }} onClick={onCancel}>
          Cancel
        </Button>
      </Form>
    );
  }
}

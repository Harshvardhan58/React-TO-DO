import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import TodoItemList from "../models/TodoItemList";
import { observable } from "mobx";
import TodoForm from "./TodoForm";
import { observer } from "mobx-react";
import { ListGroup } from "react-bootstrap";

@observer
class Todo extends Component {
  render() {
    const { item, variant, onDelete = () => {} } = this.props;
    console.log(item);
    return (
      <ListGroup.Item style={{ marginTop: 5, marginBottom: 5 }}>
        <h5>
          {item.title} (Priority: {item.priority})
        </h5>
        <p>{item.description}</p>
        {item.status == true ? (
          <Button
            style={{ marginLeft: 5, marginRight: 5 }}
            variant={"warning"}
            onClick={() => item.mark_as_pending()}
          >
            Mark as Pending
          </Button>
        ) : (
          <>
            <Button
              style={{ marginLeft: 5, marginRight: 5 }}
              variant={"success"}
              onClick={() => item.mark_as_done()}
            >
              Mark as Done
            </Button>
            <Button
              style={{ marginLeft: 5, marginRight: 5 }}
              variant={"danger"}
              onClick={() => onDelete(item.id)}
            >
              Delete
            </Button>
          </>
        )}
      </ListGroup.Item>
    );
  }
}

@observer
export default class TodoList extends Component {
  @observable newFormShow = false;
  @observable new_item = {};
  constructor(props) {
    super(props);
    this.create_empty_item();
    this.new_item.title = "title";
    this.new_item.description = "description";
    this.new_item.priority = 4;
    TodoItemList.add(this.new_item);
  }
  create_empty_item = () => {
    this.new_item = TodoItemList.new_item();
  };
  onAdd = item => {
    TodoItemList.add(item);
    this.newFormShow = false;
  };
  onCancel = () => {
    this.newFormShow = false;
  };
  onDelete = id => {
    TodoItemList.delete(id);
  };
  render() {
    return (
      <Row>
        <Col lg={12}>
          {this.newFormShow ? (
            <TodoForm
              onCancel={this.onCancel}
              onAdd={this.onAdd}
              item={this.new_item}
            />
          ) : (
            <Button
              onClick={() => {
                this.create_empty_item();
                this.newFormShow = true;
              }}
              block
            >
              Create New
            </Button>
          )}
        </Col>
        <Col>
          {TodoItemList.pending_items.length == 0 ? (
            <div style={{ textAlign: "center", marginTop: 10 }}>
              <p>No pending To-Do</p>
            </div>
          ) : (
            <>
              <div style={{ textAlign: "center", marginTop: 10 }}>
                <p>Pending To-Do</p>
              </div>
              <ListGroup>
                {TodoItemList.pending_items.map((item, idx) => (
                  <Todo onDelete={this.onDelete} item={item} key={idx} />
                ))}
              </ListGroup>
            </>
          )}
        </Col>
        <Col>
          {
            <>
              <div style={{ textAlign: "center", marginTop: 10 }}>
                <p>Done To-Do</p>
              </div>
              <ListGroup>
                {TodoItemList.done_items.map((item, idx) => (
                  <Todo item={item} key={idx} />
                ))}
              </ListGroup>
            </>
          }
        </Col>
      </Row>
    );
  }
}

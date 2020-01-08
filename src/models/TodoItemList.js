import { observable, action, computed } from "mobx";

class TodoItem {
  @observable id;
  @observable title;
  @observable status = false;
  @observable priority = 1;
  @observable description;

  constructor(id = 1) {
    this.id = id;
  }

  @action
  mark_as_done = () => {
    this.status = true;
  };
  @action
  mark_as_pending = () => {
    this.status = false;
  };
}

class TodoItemList {
  @observable items = [];
  @action
  add = item => {
    this.items.push(item);
  };

  @action
  delete = id => {
    this.items = this.items.filter(it => it.id != id);
  };

  @computed
  get pending_items() {
    return (
      this.items
        .filter(it => it.status == false)
        .sort((a, b) => a.priority - b.priority) || []
    );
  }

  @computed
  get done_items() {
    return (
      this.items
        .filter(it => it.status == true)
        .sort((a, b) => a.priority - b.priority) || []
    );
  }

  @action
  new_item = () => {
    let id =
      this.items.length > 0 ? this.items[this.items.length - 1].id + 1 : 1;
    return new TodoItem(id);
  };
}

export default new TodoItemList();

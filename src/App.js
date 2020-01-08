import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
export default class App extends Component {
  @observable text = "hii";
  render() {
    return (
      <div>
        <p>{this.text}</p>
        <input value={this.text} onChange={e => (this.text = e.target.value)} />
        <button onClick={() => (this.text = "hii")}>Reset</button>
      </div>
    );
  }
}

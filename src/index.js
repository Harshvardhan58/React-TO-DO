import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
const title = "React with Babel";
ReactDOM.render(<App title={title} />, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";
import Calculator2 from "./component/class/calculator2";
import Mapper from "./component/class2/mapper";
import Calculator3 from "./component/class3/calculator3";
import Lifecycle from "./component/class4/lifecycle";
import Todo from "./component/todo/todo";
import AlertDialog from "./component/todo/dialog";
import Fetcher from "./component/Api/api";

import App from "./component/class4/dark";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Fetcher />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import Calculator2 from "./component/class/calculator2";
import Mapper from "./component/class2/mapper";
import Calculator3 from "./component/class3/calculator3";
import Lifecycle from "./component/class4/lifecycle";
import Todo from "./component/todo/todo";
import AlertDialog from "./component/todo/dialog";
import Fetcher from "./component/Api/api";
import Login from "./component/Api/login";
import Delay from "./component/Api/delay";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import RoomProvider from "./component/context";

ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,

  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

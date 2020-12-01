import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store/main";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

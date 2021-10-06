import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

import configureStore from "./store/configStore";
import { startGetUser } from "./action/userAction";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

// Handle page reloading
if (localStorage.getItem("authToken")) {
  store.dispatch(startGetUser());
}

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

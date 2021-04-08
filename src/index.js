import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";

import { createStore, applyMiddleware } from "redux";
import reducer from "./redux/reducers";
import { Provider } from "react-redux";

import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

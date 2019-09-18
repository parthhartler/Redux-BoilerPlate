import ReactDOM from "react-dom";
import React from "react";
import Main from "./main";
import { Provider } from "react-redux";
import store from "./store";

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById("app")
  );

render();
store.subscribe(render);

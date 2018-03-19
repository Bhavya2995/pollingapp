import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import "./index.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import LoginPage from "./components/LoginPage" ;
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

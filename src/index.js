import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import  PrivateRoute  from "./PrivateRoute";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";
import "./index.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import PollView from "./components/PollView";
import AddPoll from "./components/AddPoll";
import Pollslist from "./components/Pollslist";
import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Switch>
        <PrivateRoute path="/pollslist" component={Pollslist} />
          <PrivateRoute path="/addpoll" component={AddPoll} />
          <PrivateRoute path="/polls/:id" component={PollView} />
          <PrivateRoute path="/main" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

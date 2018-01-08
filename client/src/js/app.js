import React, { Component } from "react";
import { BrowserRouter,Route, Switch} from "react-router-dom";
import { render } from "react-dom";
import LogIn from "./tabForSignUp";
import Header from "./header";
import Home from "../components/home";
import "../css/style.css";
//import { Login } from './login';

export default class App extends React.Component {
  render() {
    return <BrowserRouter>
        <div>
          <Header/>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LogIn} />
        </div>
      </BrowserRouter>;
  }
}

render( <App/> , document.getElementById("app1"));
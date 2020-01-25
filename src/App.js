import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import Contacts from "./containers/Contacts/Contacts";
import AddContact from "./containers/AddContact/AddContact";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route path="/" exact component={Contacts} />
            <Route path="/add-contact" component={AddContact} />
          </Switch>
        </div>
    );
  }
}

export default App;

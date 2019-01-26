import React, { Component } from 'react';
import './App.scss';
import {Switch,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/Productlist";
import Cart from "./components/Cart/Cart";
import Details from "./components/Detail";
import Default from "./components/Default";
import Model from "./components/Model";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Model/>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../images/mainicons.png";
import { ButtonMyCart } from "./Button";
import styled from "styled-components";
export default class Navbar extends Component {
  render() {
    return (
      <Navbarbackground className="navbar navbar-expand-sm px-sm-5">
        <Link to="/">
          <img src={logo} alt="Store" className="navbar-brand"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/about" className="nav-link">
              About
              </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
            Product
            </Link>
          </li>
        </ul>
        <Link to='/cart' className="ml-auto">
          <ButtonMyCart>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            My cart
          </ButtonMyCart>
        </Link>
      </Navbarbackground>
      
    );
  }
}

const Navbarbackground = styled.nav `
  background: var(--graydark);
  .nav-link{
    font-size: 1.2rem;
    color: white;
    &:hover{
      font-size: 1.6rem;
    }
  }


`
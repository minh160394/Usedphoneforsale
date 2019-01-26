import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { ProductConsumer } from "../context";
export default class Products extends Component {
  render() {
    const { id,title, img, price, inCart} = this.props.product;
    return (
      
          <ProductDisplay className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <ProductConsumer>{
                  value => (
                  <div className="img-container p-5"
                  onClick={() => 
                    value.handleDetail(id)}>
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top" />
                  </Link>
                  <button className="cart-btn" disabled={inCart ? true : false }
                    onClick={ () => {
                      value.addToCart(id);
                      value.openModel(id);
                    }} >
                    {inCart ? (
                        <p className="mb-0" disabled>
                        {" "}
                        InCart
                        </p>
                    ) : (
                        <i className="fas fa-cart-plus" />
                    )}
                    </button> 
                </div>) 
                } 
              </ProductConsumer>
              <div className="card-footer d-flex justify-content-between">
                    <p className="algin-self-center mb-0 newcontent">
                        {title}
                    </p>
                    <h5 className="text-blue mb-0">
                        <span className="mr-1">$</span> {price}
                    </h5>
              </div>
            </div>
        </ProductDisplay>
    );
  }
}
Products.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
const ProductDisplay = styled.div`
.cart{
  border: 0.01rem solid black;
  transition: all 1s linear;
}
&:hover {
  .card {
    border: 0.1 rem solid black;
    box-shadow : 4px 4px 10px 0px black;
  }
}
.newcontent{
  font-family: 'Anton', sans-serif;
}
.card-footer {
  transition: all 1s linear;
}
.card-img-top{
  transition: all 1s linear;
}
.img-container {
  position: relative;
  overflow: hidden;
}
.img-container:hover .card-img-top{
  transform : scale(1.2);
}
.cart-btn {
  position: absolute;
  bottom:0;
  right:0;
  padding: 0.2rem 0.4rem;
  background: var(--bluedark);
  color: white;
  font-size: 1.4rem;
  border-radius:0.5rem 0 0 0;
  cursor: pointer;
  transform: translate(100%, 100%);
  transition: all 0.5s linear;
}
.img-container:hover .cart-btn {
  transform: translate(0, 0);
}
.cart-btn:hover {
  background: var(--bluelight);
  color: black;
}
`
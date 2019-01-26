import React, { Component } from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";
export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          value =>{
           const { 
            id,
            company,
            img,
            info,
            price,
            title,
            inCart} = value.detailProducts;
          
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center my-5">
                  <h1>{title}</h1>
                </div> 
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src={img} className="img-fluid" alt="product"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Model: {title}</h2>
                  <h4>Made by : {company}</h4>
                  <h4>Price: $ {price}</h4>
                  <p>Information of Phone: </p>
                  <p>{info}</p>
                  {/*Button*/}
                  <div>
                    <Link to="/">
                      <ButtonContainer>
                        Back to product
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() =>{
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "Added Incart" : "Add to cart"}
                    </ButtonContainer>

                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
      </ProductConsumer>
    );
  }
}

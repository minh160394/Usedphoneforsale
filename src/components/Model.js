import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import {ButtonContainer} from "./Button";
export default class Model extends Component {
  render() {
    return (
        <ProductConsumer>
            {value => {
                const {modelOpen, closeModel} = value;
                const  {img, title, price} = value.modelProduct;
                if (!modelOpen){
                    return null;
                }else{
                    return (
                        <ModelCon>
                            <div className="container">
                                <div className="row">
                                    <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize model">
                                        <h5>Items added to the cart</h5>
                                        <img src={img} className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price : $ {price}</h5>
                                        <Link to="/">
                                            <ButtonContainer onClick={() => closeModel()}>
                                             Continue Shopping   
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer onClick={() => closeModel()}>
                                             Go to Cart   
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div> 
                        </ModelCon>  
                    );
                }
            }
            }
        </ProductConsumer> 
    );
  }
}

const ModelCon = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background: rgba(0,0,0,0.3);
display:flex;

align-items: center;
justify-content: center;
.model {
    background: white;
    padding: 5rem ;
}
`
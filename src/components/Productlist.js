import React, { Component } from 'react';
import Title from "./Title";
import Products from './Products';
import { ProductConsumer } from "../context";
export default class Productlist extends Component {
  render() {
    return (
      <React.Fragment>
         <div className="py-5">
            <div className="container">
              <Title name="our" title="products"/>
              <div className="row">
                <ProductConsumer>
                  {
                    value => {
                      return value.product.map(product => {
                        return <Products key={product.id} product={product} />;
                      });
                    }
                  }
                </ProductConsumer>
              </div>
            </div>
        </div>
      </React.Fragment>
     
    );  
    //<Products/>
  }
}

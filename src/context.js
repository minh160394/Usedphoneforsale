import React, { Component } from 'react';
import {storeProducts, detailProduct} from "./data";
const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    product : [],
    detailProducts : detailProduct,
    cart: [],
    modelOpen: false,
    modelProduct: detailProduct,
    cartSubtotal:0,
    cartTax: 0,
    cartTotal: 0
  };
  componentDidMount(){
    this.setProducts();
  }
  setProducts = () => {
    let temp = [] ;
    storeProducts.forEach(item => {
      const singleItem = {...item};
      temp = [...temp, singleItem];
    });
    this.setState(() =>{
      return{product: temp};
    });
  };
  getItem = (id) => {
    const productIdentified = this.state.product.find(item => item.id === id);
    return productIdentified;
  }
  handleDetail = (id) => {
    const productIdentified= this.getItem(id);
    this.setState( ()=>{
      return {detailProducts: productIdentified};
    })
  };
  closeModel = () => {
    this.setState(() => {
      return {modelOpen:false}
    })
    
  }
  openModel = id => {
    const product = this.getItem(id);
    this.setState( () =>{
      return {modelProduct: product, modelOpen:true}
    })
  }
  increment = (id) => {
    let tempcart = [...this.state.cart];
    const selectedProduct = tempcart.find(item => item.id === id);
    const index = tempcart.indexOf(selectedProduct);
    const product = tempcart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState ( () => {
      return{
        cart: [...tempcart]}
      },
      () => {
        this.addTotal()
      }
    );
  }
  decrement = (id) => {
    let tempcart = [...this.state.cart];
    const selectedProduct = tempcart.find(item => item.id === id);
    const index = tempcart.indexOf(selectedProduct);
    const product = tempcart[index];
    product.count = product.count - 1;
    if(product.count === 0){
      this.removeitem(id);
    }else{
      product.total = product.count * product.price;
      this.setState ( () => {
      return{
        cart: [...tempcart]}
      },
      () => {
        this.addTotal()
      }
    );
    }
    
  }
  removeitem = (id) => {
    let tempProduct = [...this.state.product];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProduct.indexOf(this.getItem(id));
    let removedProduct = tempProduct[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState ( () => {
      return {
        cart : [...tempCart],
        product: [...tempProduct]};
      },
      () => {
        this.addTotal();
      }
    );
  };
  clearCart = () => {
      this.setState( () =>{
        return { cart: []};
      }, () =>{
        this.setProducts();
      });
  }
  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal *0.13;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(
      () =>{
        return {
          cartSubtotal: subTotal,
          cartTax: tax,
          cartTotal: total,
        }
      }
    )
  }
  addToCart = (id) => {
    let temp = [...this.state.product];
    const index = temp.indexOf(this.getItem(id));
    const productIdentified = temp[index];
    productIdentified.inCart = true;
    productIdentified.count = 1;
    const price = productIdentified.price;
    productIdentified.total = price;
    this.setState(
      () => {
        return{
          product: temp, cart: [...this.state.cart, productIdentified] 
        };
      },
      ()=>{
        this.addTotal();
      }
    )
  };
  render() {
    return (
      <ProductContext.Provider value={
        {
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          handlemodel: this.handlemodel,
          openModel: this.openModel,
          closeModel : this.closeModel,
          increment: this.increment,
          decrement:this.decrement,
          removeitem:this.removeitem,
          clearCart:this.clearCart

        }
      }>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};
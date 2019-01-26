import React from 'react';
import "./Cartbutton.scss";

export default function Cartitem({item,value}) {
    const{id,title, img, price, total, count} = item;
    const {increment,decrement,removeitem} = value;
   
  return (
    <div className="row my-1 text-center mt-1">
        <div className="col-10 mx-auto col-lg-2 mt-1">
                <img src={img}
                className="img-fluid"
                alt="product"
                style={{width: "5rem",height:"5rem"}}/>
            </div>
            <div className="col-10 mx-auto col-lg-2 mt-1">
                
                <span className="d-lg-none">Product: </span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2 mt-1">
                <span className="d-lg-none">Price: </span>${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 mt-1">
                <div className="d-flex justify-content-center">
                    <div><span className="btn mx-1 buttonblack1" onClick={() => decrement(id)}>
                    - </span></div>
                    <div><span className="btn mx-1 buttonblack2">
                    {count}</span></div>
                    <div><span className="btn mx-1 buttonblack1" onClick={() => increment(id)}>
                    +</span></div>
                </div>
            </div>
             <div className="col-10 mx-auto col-lg-2 mt-1">
                <div className="cart-icon" onClick={() => removeitem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 mt-1">
                <strong> Item total: $ {total}</strong>
            </div>
           
    </div>
  )
}

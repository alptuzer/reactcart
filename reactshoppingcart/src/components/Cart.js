import React from 'react'
import '../styles/cart.css'
import { useState,useEffect } from 'react';

const Cart = ({ cart, setCart, handleChange,setTotalItemSize }) => {
    const [price, setPrice] = useState(0);
  
    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();


    };
  
    const handlePrice = () => {
      let ans = 0;
      let total = 0 ;
      cart.map((item) => (ans += item.amount * item.price)  );
      setPrice(ans);
      cart.map((item) => (total += item.amount )  );
      setTotalItemSize(total)
    };
  
    useEffect(() => {
      handlePrice();
    });
  
    return (
     <article>
      {cart.map((item)=>(
          <div className='cart_box' key={item.id}>
              <div className='cart_img'>
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
              </div>
              <div>
                  <button onClick={()=> handleChange(item,1)}>+</button>
                  <button>{item.amount}</button>
                  <button onClick={()=> handleChange(item,-1)}>-</button>
              </div>
              <div>
                  <span>{item.price} TL</span>
                  <button onClick={()=> handleRemove(item.id)}>Remove</button>
              </div>
          </div>
      ))}
      <div className='total'>
          <span>Total Price of Your Cart</span>
          <span>TL - {price}</span>
      </div>
     </article>
    )
  }
  
  export default Cart;
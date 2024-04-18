import React from 'react';
import './styles/app.css';
import Navbar from './components/Navbar.js'
import Amazon from './components/Amazon.js'
import { useState } from 'react';
import Cart from './components/Cart.js';
 

function App() {

  const [show ,setShow] = useState(true);
  const [cart , setCart] = useState([]);
  const [totalitemsize,setTotalItemSize] = useState(0);
    const handleClick = (item)=>{
      if(cart.indexOf(item) !== -1) return;
      setCart([...cart,item])
      setTotalItemSize(totalitemsize+1); 
    }

     

    const handleChange = (item,d) => {
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += d;

      if(arr[ind].amount === 0) arr[ind].amount = 1;
      setCart([...arr]);


    }
   

  return (
    <React.Fragment>
      <Navbar show={show} setShow={setShow} cart={cart} size={cart.length} totalitemsize={totalitemsize}   />
      { show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} setTotalItemSize={setTotalItemSize} /> }
      </React.Fragment>
  );
}

export default App;
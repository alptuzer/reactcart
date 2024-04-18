import React , {useState} from 'react'
import '../styles/navbar.css'
import {FaShoppingCart} from 'react-icons/fa'

export default function Navbar({setShow,size}) {
  return (
       <nav>
        <div className='nav_box'>
            <span className='my-shop' onClick={()=>setShow(true)} >My Shopping</span>
            <div className='cart' onClick={()=>setShow(false)} >
                <span><FaShoppingCart/></span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
     
  )
}

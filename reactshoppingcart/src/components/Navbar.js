import React , {useState} from 'react'
import '../styles/navbar.css'
import {FaShoppingCart} from 'react-icons/fa'
import { TiLinkOutline } from "react-icons/ti";
export default function Navbar({setShow,size,totalitemsize,show}) {
  return (
       <nav>
        <div className='nav_box'>

          
     {/*        <span className='my-shop' onClick={()=>setShow(true)}>Vitrin</span> */}
           
          
          
          
           { show ? 
           
           <div className='cart' onClick={()=>setShow(false)} >
                <span><FaShoppingCart/></span>
                <span>{size}</span>
            </div> 
            :
            <span className='my-shop' onClick={()=>setShow(true)}>Vitrin</span>
            }
            {/*     <div className='cart' onClick={()=>setShow(false)} >
                <span><FaShoppingCart/></span>
                <span>{size}</span>
            </div> */}



            <div className='cart2' >
                <span><TiLinkOutline /></span>
                <span>{totalitemsize}</span>
            </div>
     
        </div>
    </nav>
     
  )
}

import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const products = useSelector((state => state.cart.products))

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/en.png" alt="" />
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </div>
          <div className="item">
            <Link className='link' to ="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to ="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className='link' to ="/products/3">Kids</Link>
          </div>
        </div>

        <div className="center">
          <Link className='link' to ="/">IZZYSTORE</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className='link'to ="/">Home</Link>
          </div>
          <div className="item">
            <Link className='link' to ="/">About</Link>
          </div>
          <div className="item">
            <Link className='link' to ="/">Contacts</Link>
          </div>
          <div className="item">
            <Link className='link'to ="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon></SearchIcon>
            <PersonOutlinedIcon></PersonOutlinedIcon>
            <FavoriteBorderIcon></FavoriteBorderIcon>
            <div className="cartIcon" onClick={(e)=>{setOpen(!open)}}>
              <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
              <span>{products.length}</span>
            </div>
            
          </div>

        </div>
      </div>
      {open && <Cart></Cart>}
      
    </div>
  )
}

export default Navbar
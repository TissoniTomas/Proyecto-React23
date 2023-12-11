import React from 'react'
import logo from "../../assets/Logo/logo.png"
import "./header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const header = () => {
  return (
    <nav id='navbar'>
      <a href= "../../../index.html"><img className='navbar-logo' src={logo} /></a>
      <ul id='navbar-list'>
        <li className='navbar-item'>HOME</li>
        <li className='navbar-item'>PRODUCTOS</li>
        <li className='navbar-item'>QUIENES SOMOS</li>
        <li className='navbar-item'>CONTACTO</li>
        <ShoppingCartIcon color= "secondary" fontSize='large'/>
        <span>5</span>
      </ul>

    </nav>
  )
}

export default header
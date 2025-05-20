import React from 'react'
import {link} from 'react-router-dom';
export const Menubar = () => {
  return(
    <div>
    <ul className='menubar'>
    <li><Link to="/">Home</></li>
    <li><Link to="/about">About</></li>
    <li><Link to="/dashboard">Dashboard</></li>
    </ul>
    </div>
  )
}
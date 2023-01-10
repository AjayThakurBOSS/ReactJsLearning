import React from 'react';

import "./header.css"
import logo from "../header/logo.png"

export default function Header() {
  function f1() {
        let date = new Date();
        let timeNow = date.toLocaleTimeString();
        document.querySelector("h2").innerText = timeNow;
      }
      setInterval(f1, 1000);
  return (
    <div className='header'>
    <img src={logo} alt="logo"/>
      <h1>WebTech Doctor </h1>
      <div className='icons'>
      <form className="d-flex">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
     <i class="fa-brands fa-square-facebook"></i>
     <i class="fa-brands fa-twitter"></i>
     <i class="fa-brands fa-linkedin"></i>
     <i class="fa-brands fa-google-plus-g"></i>
     
      </div>
      <h2> </h2>
    </div>
  )
}
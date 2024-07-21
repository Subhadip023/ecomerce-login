import React from 'react'
import './header.css'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";


export default function Header() {
  return (
    <>
    <header>
      <section className='heading'>
        <ul>
          <li><a href="#">Help</a></li>
          <li><a href="#">Orders & Returns</a></li>
          <li><a href="#">Hi,John</a></li>
        </ul>
      </section>
      <nav>
<section className='navbar'>
  <div className="nav-heading">
     <h1>
    ECOMMERCE
  </h1>
  </div>
  <div className="nav-list">
    <ul>
      <li><a href="#">Categories</a></li>
      <li><a href="#">Sale</a></li>
      <li><a href="#">Clearance</a></li>
      <li><a href="#">New Stock</a></li>
      <li><a href="#">Treading</a></li>
    </ul>
  </div>
 <div className='nav-icons'><a href="#"><CiSearch /></a>
 <a href="#"><CiShoppingCart /></a></div>
 

</section>
      </nav>
      <div className="header-ad"><IoIosArrowBack/>
  <p> Get 10% off on business sign up</p> <IoIosArrowForward/>
 </div>
    </header>
    
    </>
  )
}

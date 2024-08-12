import React from 'react'
import img1 from '../../src/images/logonew1.png'
import { NavLink } from 'react-router-dom'
import { LuUser2 } from "react-icons/lu";
export default function Header() {
  return (
    <>
    <section>
      <div className="container">

<nav className="navbar navbar-expand-lg bg-transparent navbar-light sdf22 as2222">
  <div className="container-fluid justify-content-center">
    <NavLink className="navbar-brand as221" to="/"> 
      <img src={img1} alt="logo" className="img-fluid custom-logo" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav asd11 me-lg-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link sdf109 " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link sdf109" aria-current="page" to="/aboutUs">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link sdf109" aria-current="page" to="/pricing">Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link sdf109 " aria-current="page" to="/affilated">Affilated Resaler</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link sdf109" aria-current="page" to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link sdf109" aria-current="page" to="/contactUs">Contact Us</NavLink>
        </li>
        
      </ul>
      <div className='text-center mt-2' style={{marginRight:"10px"}}>

<LuUser2 className='asdop '/>
</div>
      <div className='text-center mt-2'>

        <button className='btn asdq22' type='submit'>Get started</button>
      </div>


    </div>
  </div>
</nav>
      </div>
    </section>


    </>
  )
}

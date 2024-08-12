import React from 'react'
import img1 from '../../src/images/logo.png'
import { NavLink } from 'react-router-dom'
export default function Footer() {
    return (
        <>

            <section className='qwui22'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5  col-md-6 mb-1 mt-1">
                            <div className='asd098'>

                            <NavLink  onClick={() => window.scrollTo(0, 0)} to={'/'}>

                                <img src={img1} alt="logo" className='custom-logo' />
                            </NavLink>
                            <span className='d-block text-light'>Join our newsletter to stay up to date on features and releases.</span>
                            <div className="row mb-3 mt-3">
                            <div className="col-md-8 mb-2 mt-2">

                                <input type="text" name="as" id="asd" className='form-control py-3' placeholder='Enter your email' />
                            </div>
                            <div className="col-md-4 mb-2 mt-2" >
                                <button className='sada22 w-100 py-3 px-lg-4 px-md-5 py-lg-3 py-md-2' type='submit'>Join now</button>

                            </div>
                        </div>
                        </div>
                            </div>
                        <div className="col-lg-7 col-md-6 mb-1 mt-1 text-center">
                            <div className="row asd098 justify-content-center">
                            
                                <div className="col-md-4 text-center">
                                    <span className='text-light d-block sad147'>Product</span>
                                    <ul className='op48 mt-2'>
                                        <li>

                                            <NavLink  onClick={() => window.scrollTo(0, 0)} className='qqer  text-light mb-1' to='/'>Home</NavLink>

                                        </li>

                                        <li>

                                            <NavLink  onClick={() => window.scrollTo(0, 0)} className='qqer  text-light mt-1' to='/product'>Product</NavLink>

                                        </li>
                                        <li>

                                            <NavLink  onClick={() => window.scrollTo(0, 0)} className='qqer  text-light mt-1' to='/aboutUs'>About Us</NavLink>

                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className="col-md-4 text-center">
                                <span className='text-light d-block sad147 '>Product</span>

                                    <ul className='op48 mt-2'>
                                    <li>

<NavLink className='qqer  text-light'  onClick={() => window.scrollTo(0, 0)} to='/pricing'>Pricing</NavLink>

</li>
<li>

<NavLink className='qqer  text-light' to='/affilated'  onClick={() => window.scrollTo(0, 0)}>Affilated Resaler</NavLink>

</li>
<li>

<NavLink className='qqer  text-light' to='/contactUs'  onClick={() => window.scrollTo(0, 0)}>Contact Us</NavLink>

</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className='text-center'>
                                        <span className='text-light d-block sad147'>Follow Us
                                        </span>
                                    </div>
                                    <ul className='op48 mt-2'>
                                    <li>

<NavLink className='qqer  text-light' to='#' >Facebook</NavLink>

</li>
<li>

<NavLink className='qqer  text-light' to='#'>Instagram</NavLink>

</li>
<li>

<NavLink className='qqer  text-light' to='#'>Twitter</NavLink>

</li>
<li>

<NavLink className='qqer  text-light' to='#'>LinkedIn</NavLink>

</li>
                                    </ul>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div className="row border-top justify-content-center ">
                        <div className="col-md-10 text-center mt-2 mb-2">
                            <span className='d-block asd4754 text-light'>Copyright © 2024 Webworx by All Rights Reserved and Develop by HNH TECH SOLUTIONS</span>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

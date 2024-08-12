import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ContactUsBanner() {
  return (
    <>
      <section>
            <div className="row">
                <div className="col-md-12">
                <div className="contact-banner">
      <div className="overlay"></div>
      <div className="banner-content">
        <span className='d-block uyr23 text-light'>Contact Us</span>
        <nav className="breadcrumb">
        <NavLink  to="/">Home</NavLink> / <NavLink  to="#">Contact Us</NavLink>
        </nav>
    </div>

                </div>
            </div>
        </div>
      </section>
    </>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
export default function AffilatedBanne() {
  return (
    <>
      <section>
            <div className="row">
                <div className="col-md-12">

                    
                <div className="affilated-banner">
      <div className="overlay"></div>
      <div className="banner-content">
        <span className='d-block uyr23 text-light'>Affilated Resaler</span>
        <nav className="breadcrumb">
          <NavLink  to="/">Home</NavLink> / <NavLink  to="#">Affilated Resaler</NavLink>
        </nav>
    </div>

                </div>

            </div>
        </div>
      </section>
    </>
  )
}

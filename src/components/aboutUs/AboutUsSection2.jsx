import React from 'react'

import img1 from '../../images/img19.jpg'


export default function AboutUsSection2() {
  return (
    <>
    <section className='aboutSec2' style={{marginTop:'5%'}}>
        <div className="container">



            <div className="row justify-content-center mb-3 mt-3">
                <div className="col-md-8 mb-2 mt-2 text-center">
                    <span className='d-block text-light we2'>Meet our team</span>
                    <span className='d-block text-light sd30 mt-2'>This is us!</span>
                </div>
            </div>

            <div className="row justify-content-center mb-3 mt-3">
                <div className="col-md-5 mb-2 mt-2 text-center">
                    <div>
                        <img src={img1} className='as75' alt="img1"  />
                    </div>

                </div>
                <div className="col-md-6 mb-2 mt-2 text-start">
                    <div className='asd987'>
                      <span className='d-block we2 text-light mb-2'>Our values.</span>
                      <span className='d-block we4 text-light mt-2'>We work closely with you to understand your specific needs, delivering powerful tools and, if needed, trained agents to manage your CRM systems. Don’t let inefficiencies hold your business back. Contact Websworx today to see how we can empower you with the right technology and support to achieve your goals.</span>
                    </div>

                </div>

            </div>



        </div>
    </section>
      
    </>
  )
}




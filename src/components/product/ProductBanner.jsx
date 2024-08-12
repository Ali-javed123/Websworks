import React from 'react'
import img1 from '../../images/img25.webp'
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProductBanner() {
  return (
    <>
    <section className='as775' style={{marginTop:'3%'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className='as775'>

                    <span className='uyr23 d-block'> This is <span className='uyr123'>Flow Up.</span></span>
                    <span className='d-block we4'>A Customer Relationship Management (CRM) system is a tool designed to help businesses manage and improve their interactions with current and potential customers. Here are the key functions of a CRM:
                    </span>
                    <ol className='asa44 mt-2'>
                      <li>Contact Management: Stores customer contact information, including names, addresses, phone numbers, and communication history, in a centralized database.</li>
                      <li className='mt-2'>Sales Management: Tracks sales opportunities and stages, from lead generation to closing deals. It helps sales teams manage their pipelines and forecast sales.</li>
                    </ol>
                    <div className="d-flex justify-content-around">
  <div className="mb-2 mt-1 mr-2"  >

  <button className='sada2 px-3 py-2  d-flex'>Get Start <span className='hero-button-next mt-1' style={{marginLeft:"10px"}}><FaArrowRightLong/></span></button>

  </div>
  <div className="mb-2 mt-2">

<button type='submit' className='asd22 btn px-4 py-3'>Get demo </button>
</div>
</div>
                    </div>
                </div>
                <div className="col-md-6">
                   <div>
                    <img src={img1} className='asd876' alt="sa" />
                   </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

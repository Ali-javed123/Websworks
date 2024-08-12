import React from 'react'
import img1 from '../../images/crm4.png'

export default function HomeSection6() {
  return (
    <>
    <section style={{marginTop:'7%'}}>
        <div className="container">
            <div className="row justify-content-center mt-4 mb-3 justify-content-center">
                <div className="col-md-8 text-center">
                    <span className='d-block we2'>Teamwork makes the dreamwork, so make it seamless.</span>

                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col-lg-6 col-md-6 col-12 mt-2 mb-2">
                    <img src={img1} className='asd45' alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12 text-start" >
                    <div className='werwa123 text-start'> 
                    <span className='we2 d-block text-dark'>Let the time flow</span>    
                    <span className='d-block text-dark we4 mt-2'>Visualize project timelines, milestones, and deadlines in a dynamic and interactive timeline view for better project planning and tracking.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

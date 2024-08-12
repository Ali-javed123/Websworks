import React from 'react'
import img from '../../images/textture.jfif'
import img2 from '../../images/img15.png'
import img3 from '../../images/img16.jpg'


export default function HomeSection5() {
  return (
    <>
    <section style={{marginTop:'7%'}}>
        <div className="container">
            <div className="row mt-4 mb-2">
                <div className="col-md-11 text-center">

            <span className='d-block asda11 mb-2 mt-2'>
            Testimonials
            </span>
            <span className='sadxx47 d-block mb-3  mt-2'> 
            We believe FlowUp is the best tool out there. But, listen to our happy clients.
            </span>
                </div>
                <div className="row mt-2 mb-2 text-start" >
                    <div className="col-lg-5 col-md-6  mt-2 mb-2">
                        <div className='position-relative'>
                        <img src={img} width={'100%'} className='asdqrs45' alt="asd" />
                        <div className='wetu22'>
                            <span className='das text-light d-block'>75.54%</span>
                            <span className='we4 d-block text-light'>Team satisfaction improvement</span>

                        </div>

                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-2 mb-2">
                        <div className="card shadow ops2">
                            <div className="card-body">
                                <div className="row justify-content-center mt-2 mb-2">
                                    <div className="col-2 text-center">
                                        <img src={img2} alt="as" className='wer23' />
                                    </div>
                                    <div className="col-2 text-center">
                                        <img src={img2} alt="as" className='wer23' />
                                    </div>
                                    <div className="col-2 text-center">
                                        <img src={img2} alt="as" className='wer23' />
                                    </div>
                                    <div className="col-2 text-center">
                                        <img src={img2} alt="as" className='wer23' />
                                    </div>
                                    <div className="col-2 text-center">
                                        <img src={img2} alt="as" className='wer23' />
                                    </div>
                                </div>
                                <div className="row mt-2 mb-2">
                                    <div className="col-md-12 text-start">
                                        <span className='d-block we2 mb-2 mt-3'>
                                        “Im using FlowUp Team to manage my teamof accountants and it has been a game changer.”
                                        </span>
                                    </div>
                                </div>
                                <div className="row mt-2 mb-2">
                                    <div className="col-lg-3 col-md-4 col-4 mt-2 mb-2">
                                        <img src={img3} className='wer123' alt="" />
                                    </div>
                                    <div className="col-lg-9 col-md-8 col-8 text-start mt-2 mb-2">
                                        <span className='d-block fw-bolder fw-25 text-dark lh-1 mt-2 mb-2'>Name Surname</span>
                                        <span className='d-block text-dark lh-1 mt-2 mb-2'>Position, Company name</span>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

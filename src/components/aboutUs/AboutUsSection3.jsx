import React from 'react'
import img1 from '../../images/img20.jpg'
import img2 from '../../images/img21.jpg'
import img3 from '../../images/img22.jpg'
import img4 from '../../images/img23.jpg'
import img5 from '../../images/img24.jpg'

 
export default function AboutUsSection3() {
  return (
    <>
    <section className='sad2463' style={{marginTop:'5%'}}>
        <div className="container">
            <div className="row justify-content-center mt-2 mb-2">
                <div className="col-md-12 text-start">

                <span className='d-block sd30 mb-2'>
                We are all about the people.
                </span>
                </div>
            </div>
            <div className="row justify-content-center mt-2 mb-2">
                <div className="col-md-4 text-center mt-2 mb-2">
                    <div>
                        <img src={img1} className='as85' alt="img1" />
                        <span className='d-block we222 mt-2 mb-2'>Ava Johnson</span>
                        <span className='d-block we122'>Head of Design</span>

                    </div>

                </div>
                <div className="col-md-4 text-center mt-2 mb-2">
                    <div>
                        <img src={img2} className='as85' alt="img1" />
                        <span className='d-block we222 mt-2 mb-2'>Emma Lawson</span>
                        <span className='d-block we122'>CTO, Data Scientist
                        </span>

                    </div>

                </div>
                <div className="col-md-4 text-center mt-2 mb-2">
                    <div>
                        <img src={img4} className='as85' alt="img1" />
                        <span className='d-block we222 mt-2 mb-2'>Isabella Green
                        </span>
                        <span className='d-block we122'>Data Scientist</span>

                    </div>

                </div>
               
            </div>
            <div className="row justify-content-center mt-2 mb-2">
                <div className= "text-center col-md-5 mt-2 mb-2">
                    <div>
                        <img src={img3} className='as85' alt="img1" />
                        <span className='d-block we222 mt-2 mb-2'>Ava Johnson
                        </span>
                        <span className='d-block we122'>Head of Design</span>

                    </div>

                </div>
                <div className="col-md-6 text-center">
                <div>
                        <img src={img5} className='as85' alt="img1" />
                        <span className='d-block we222 mt-2 mb-2'>Sophia Martinez
                        </span>
                        <span className='d-block we122'>Product Manager</span>

                    </div>
                </div>
           
               
            </div>
            {/* <div className="row justify-content-center">
            <div className="col-md-10 text-center mt-2 mb-2">
                    <div>
                        <img src={img5} className='as85' alt="img1" />
                        <span className='d-block sad47'>Sophia Martinez
                        </span>
                        <span className='d-block we4'>Product Manager</span>

                    </div>

                </div>
            </div> */}

        </div>
    </section>
      
    </>
  )
}

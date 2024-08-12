import React from 'react'
import img1 from '../../images/home1.jpg'
import img2 from '../../images/img2.webp'
import img3 from '../../images/img3.webp'
import img4 from '../../images/img4.webp'


import { FaArrowRightLong } from "react-icons/fa6";
export default function HomeBanner() {

  return (
    <>
    <section className="container homeBanner  mt-3" style={{marginTop:'3%'}}>
        <div className="row">
            <div className="col-md-12">
                <span className='das d-block'>Say bye to <span className='text-primary'>chaos.</span> </span>
                <span className='asda d-block' >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </span>
<div className="row justify-content-center">
  <div className="col-md-4 text-center  mb-2 mt-2">
<div className='rtyto22'>

  <button className='sada2 px-3 py-2  d-flex'>Get Start <span className='hero-button-nexts mt-1' style={{marginLeft:"10px"}}><FaArrowRightLong/></span></button>
</div>

  </div>
  <div className="col-md-4 text-center mb-2 mt-2">

<button className='asd22 px-4 py-2 mt-1'>Get demo </button>
</div>
</div>

{/* <div className="row justify-content-center">
  <div className="col-md-6 mb-2 text-center">

<div class="d-flex justify-content-center mt-4 asas">
  <img width={"100%"} className="sadas img-fluid" src={img1} alt="img1" />
<div  >
<img  src={img2} className='asd2' alt="img2" />
</div>
<div >
<img src={img3} className='asd3' alt="img3" />
</div>
<div >
<img src={img4} className='asd4' alt="img3" />
</div>
</div>
  </div>

</div> */}


<div className="row justify-content-center mb-3">
  <div className="col-lg-6 col-md-10 col-sm-10 position-relative main-image-container">
    <img src={img1} alt="Main Image" className="img-fluid main-image" />
    {/* Top Left Image */}
    <img src={img2} alt="Top Left Image" className="position-absolute top-left-image" />
    {/* Bottom Left Image */}
    <img src={img3} alt="Bottom Left Image" className="position-absolute bottom-left-image" />
    {/* Top Right Image */}
    <img src={img4} alt="Top Right Image" className="position-absolute top-right-image" />
  </div>
</div>

            </div>
        </div>



      


    
                
    </section>
    
    </>
  )
}

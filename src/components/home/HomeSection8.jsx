import React,{useState} from 'react'
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
export default function HomeSection8() {
  const [show1, setshow1] = useState(false)
    const [show2, setshow2] = useState(false)
    const [show3, setshow3] = useState(false)
    const [show4, setshow4] = useState(false)

  return (
    <>
    <div className='p-3'>

    <section className='container wer24 mb-4 mt-4 shadow'>
            <div className="row justify-content-center text-center">
                <div className="col-md-9 text-center">
                    <span className='d-block sadxx47'>
                    Frequently Asked Questions
                    </span>
                    <span className='d-block we4 '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </span>
                </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-10">
              <div className='tyu mt-2 mb-2 justify-content-between'>
                                <div className="text-start">
                                    {show1?
                                    <div >
                                    <span className='d-block sad47 mt-2'>How does FlowUp work?</span>
                                    <span className='d-block we4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</span>

                                    </div>:
                                    <div>
                                    <span className='d-block sad47 mt-2'>How does FlowUp work?</span>

                                    </div>

                                    }
                                </div>
                                <div className="text-start">
                                    <div>
                                        {show1 ?
                                            <span    className={`hero-button-nextFaq d-block ${show1 ? 'animate-button' : ''}`}><TiMinus onClick={() => setshow1(!show1)} className='asd454' /></span> :
                                            <span className={`hero-button-nextFaq d-block ${show1 ? 'animate-button' : ''}`}><FaPlus onClick={() => setshow1(!show1)} className='asd454' /></span>

                                        }

                                    </div>
                                </div>

                            </div>
                            <div className='tyu mt-3 mb-2 justify-content-between'>
                                <div className="text-start">
                                    {show2?
                                    <div >
                                    <span className='d-block sad47 mt-2'>How does FlowUp work?</span>
                                    <span className='d-block we4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</span>

                                    </div>:
                                    <div>
                                    <span className='d-block sad47 mt-2'>How does FlowUp work?</span>

                                    </div>

                                    }
                                </div>
                                <div className="text-start">
                                    <div>
                                        {show2 ?
                                            <span className={`hero-button-nextFaq d-block ${show2 ? 'animate-button' : ''}`}><TiMinus onClick={() => setshow2(!show2)} className='asd454' /></span> :
                                            <span className={`hero-button-nextFaq d-block ${show2 ? 'animate-button' : ''}`}><FaPlus onClick={() => setshow2(!show2)} className='asd454' /></span>

                                        }

                                    </div>
                                </div>

                            </div>
                            <div className='tyu mt-3 mb-2 justify-content-between'>
                                <div className="text-start">
                                    {show3?
                                    <div >
                                    <span className='d-block sad47 mt-2'>How does FlowUp work?</span>
                                    <span className='d-block we4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</span>

                                    </div>:
                                    <div>
                                    <span className='d-block sad47 mt-2'>How does FlowUp work?</span>

                                    </div>

                                    }
                                </div>
                                <div className="text-start">
                                    <div>
                                        {show3 ?
                                            <span className={`hero-button-nextFaq d-block ${show3 ? 'animate-button' : ''}`}><TiMinus onClick={() => setshow3(!show3)} className='asd454' /></span> :
                                            <span className={`hero-button-nextFaq d-block ${show3 ? 'animate-button' : ''}`}><FaPlus onClick={() => setshow3(!show3)} className='asd454' /></span>

                                        }

                                    </div>
                                </div>

                            </div>
                            <div className='tyu mt-3 mb-2 justify-content-between'>
                                <div className="text-start">
                                    {show4?
                                    <div >
                                    <span className='d-block sad47 mt-2'>How does FlowUp work?</span>
                                    <span className='d-block we4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</span>

                                    </div>:
                                    <div>
                                    <span className='d-block sad47 mt-2'>How does FlowUp work?</span>

                                    </div>

                                    }
                                </div>
                                <div className="text-start">
                                    <div>
                                        {show4 ?
                                            <span className={`hero-button-nextFaq d-block ${show4 ? 'animate-button' : ''}`}><TiMinus onClick={() => setshow4(!show4)} className='asd454' /></span> :
                                            <span className={`hero-button-nextFaq d-block ${show4 ? 'animate-button' : ''}`}><FaPlus onClick={() => setshow4(!show4)} className='asd454' /></span>

                                        }

                                    </div>
                                </div>

                            </div>

              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-md-5 col-8 text-center">
                <span className='sad47 d-block mt-3' >Still have a question?</span>
                <span className='d-block we4 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <button type='submit' className='sada22 btn btn-block w-100 py-3 mt-3' >Contact</button>
              </div>
            </div>
    </section>
    </div>
      
    </>
  )
}

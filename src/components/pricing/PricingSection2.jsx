import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import img1 from '../../images/img12.png';
import ReadMore from '../Readmore';
import Showless from '../Showless';
export default function PricingSection2() {


    const items3 = [
       
        "Includes everything in the Standard Package, plus:",
        "Unlimited users",
        "Customer service management:",
        "Manage customer service interactions and support requests",
        "Track customer inquiries, complaints, and service requests",
        "Integration with other business tools:",
        "Seamless workflow with email platforms, social media, accounting software, and e-commerce systems",
        "Workflow automation:",
        "Automate routine tasks and processes",
        "Improve efficiency and productivity",
        "Dedicated account manager:",
        "Personalized support and account management",
        "24/7 support:",
        "Round-the-clock assistance for any issues",
        "Quarterly strategy sessions with a CRM expert:",
        "In-depth reviews and strategic planning to maximize CRM effectiveness",
        "AI Features: Comprehensive AI-driven automation and predictive analytics",
        "Professional Agent Support: Dedicated professional agent for full CRM management"
      ];
      const items2 = [
        'Includes everything in the Basic Package, plus:',
        'Up to 10 users',
        'Advanced analytics and reporting',
        'More detailed reports and dashboards',
        'Deeper insights into customer behavior and sales performance',
        'Marketing automation',
        'Plan, execute, and track marketing campaigns',
        'Segment customers and automate email marketing',
        'Task and activity management',
        'Schedule and track tasks, appointments, and follow-ups',
        'Priority email support',
        'Faster response times for support queries',
        'Monthly consultation with a CRM expert',
        'Regular advice and optimization tips',
        'AI Features: Enhanced AI-driven analytics and lead scoring',
        'Professional Agent Support: Access to our agents for CRM management assistance',
      ];
      const items1 = [
        "Up to 3 users",
        "Essential CRM features:",
        "Contact management",
        "Sales management",
        "Lead management",
        "Basic analytics and reporting",
        "Email support",
        "Access to online training materials",
        "AI Features: Basic AI-driven insights and recommendations",
      ];
    




    const [show ,setshow]=useState(false)
    console.log('>>><<<',show)
  return (
    <>
    <section style={{marginTop:'5%'}}>
        <div className="container">
            <div className="row mt-2 mb-3 justify-content-between">
                <div className="col-md-4 mt-2 mb-2 text-start">
                    <div className='tys2 py-3'>
                        <div className="col-3 mt-3 mb-3">
                    <div className="wy3 shadow">
    <img className='sd32' src={img1} width="100%" alt="Forms" />
  </div>

                        </div>
                        <span className='d-block sad2331'>Starter</span>
                        <span className='d-block sadxx47'>$29/mo</span>
                            <div className="col-md-10 d-flex justify-content-between">

                        <button onClick={()=>setshow(!show)} type='submit' className='sada2 qops btn btn-block w-100 py-3 mt-3' >Get Started <span className='hero-button-next  px-2' style={{marginLeft:"10px"}}><FaArrowRightLong/></span></button>
                        </div>
                        <ReadMore items={items1}/>


                    </div>
                </div>
                <div className="col-md-4 mt-2 mb-2 text-start">
                    <div className='tys120 py-4'>
                        <div className="col-3 mt-3 mb-3">
                    <div className="wy3 shadow">
    <img className='sd32' src={img1} width="100%" alt="Forms" />
  </div>

                        </div>
                        <span className='d-block sad2331 text-light'>Business</span>
                        <span className='d-block sadxx47 text-light'>$29/mo</span>
                            <div className="col-md-10 d-flex justify-content-between">

                        <button type='submit' className='sada32 bg-light btn btn-block w-100 py-2 mt-3 qops' >Get Start <span className='hero-button-next px-2 text-light' style={{marginLeft:"10px"}}><FaArrowRightLong/></span></button>
                        </div>
                        {/* <ul className='op48 mt-3 mb-3'>
                            <li className='mb-3 mt-3 text-light'>
                                < IoMdCheckmarkCircleOutline className='text-light' />
                                Task assignment & tracking
                            </li>
                            <li className='mb-3 mt-3 text-light'>
                                < IoMdCheckmarkCircleOutline className='text-light' />
                                Basic reporting
                            </li>
                            <li className='mb-3 mt-3 text-light'>
                                < IoMdCheckmarkCircleOutline className='text-light' />
                                Calendar integration
                            </li>
                            <li className='mb-3 mt-3 text-light'>
                                < IoMdCheckmarkCircleOutline className='text-light' />
                                User roles & permissions
                            </li>
                            <li className='mb-3 mt-3 text-light'>
                                < IoMdCheckmarkCircleOutline className='text-light' />
                                Up to 10 team members
                            </li>
                        </ul> */}
<Showless items={items2}/>


                    </div>
                </div>
                <div className="col-md-4 mt-2 mb-2 text-start">
                    <div className='tys2'>
                        <div className="col-3 mt-3 mb-3">
                    <div className="wy3 shadow">
    <img className='sd32' src={img1} width="100%" alt="Forms" />
  </div>

                        </div>

                        <span className='d-block sad2331'>Golden</span>
                        <span className='d-block sadxx47'>$39/mo</span>
                            <div className="col-md-10 d-flex justify-content-between">

                        <button type='submit' className='sada2  btn btn-block w-100 py-3 mt-3 qops' >Get Started <span className='hero-button-next px-2' style={{marginLeft:"10px"}}><FaArrowRightLong/></span></button>
                        </div>

<ReadMore items={items3}/>

                        {/* <ul className='op48 mt-3 mb-3'>
                            <li className='mb-3 mt-3'>
                                < IoMdCheckmarkCircleOutline className='text-dark' />
                                Task assignment & tracking
                            </li>
                            <li className='mb-3 mt-3'>
                                < IoMdCheckmarkCircleOutline className='text-dark' />
                                Basic reporting
                            </li>
                            <li className='mb-3 mt-3'>
                                < IoMdCheckmarkCircleOutline className='text-dark' />
                                Calendar integration
                            </li>
                            <li className='mb-3 mt-3'>
                                < IoMdCheckmarkCircleOutline className='text-dark' />
                                User roles & permissions
                            </li>
                            <li className='mb-3 mt-3'>
                                < IoMdCheckmarkCircleOutline className='text-dark' />
                                Up to 10 team members
                            </li>
                        </ul> */}

                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

import React from 'react'
import img1 from '../../images/crm5.avif'

export default function HomeSection7() {
  return (
    <>
    <section style={{marginTop:'5%'}}>
        <div className="container">
     
            <div className="row mt-3 mb-3">
            <div className="col-lg-6 col-md-6 col-12 text-start" >
                    <div className='werwa123 text-start'> 
                    <span className='we2 d-block text-dark'>Task management? Easy.</span>    
                    <span className='d-block text-dark we4 mt-2'>Manage tasks with ease using a kanban-style board, allowing for intuitive task organization, prioritization, and progress tracking across stages of completion.</span>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-2 mb-2">
                    <img src={img1} className='asd45' alt="DAS" />
                </div>
                
            </div>
            <div className="row justify-content-center mb-3 mt-3">
                <div className="col-md-6 text-center">
  <button className="asd22 px-4 py-2 mt-4">Get demo</button>

                </div>
            </div>
            
        </div>
    </section>
      
    </>
  )
}

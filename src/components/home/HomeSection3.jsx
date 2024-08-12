import React, { useState } from 'react';
import img1 from '../../images/crm2.webp';

export default function HomeSection3() {
  const [show, setShow] = useState('Applications');
  
  return (
    <>
      <section style={{ marginTop: '5%' }}>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 text-center">
              <span className="asda11 d-block">FLOWUP FEATURES</span>
              <span className="sadxx47">Perfect features to make your teamwork easier.</span>
            </div>
          </div>
          <div className="row mt-2 mb-3 justify-content-center">
            <div className="col-md-4 mt-2 mb-2 text-center" >
              <button onClick={() => setShow('Applications')} className="asd23 px-4 py-2">Applications</button>
            </div>
            <div className="col-md-4 mt-2 mb-2 text-center">
              <button onClick={() => setShow('Customer')} className="asd23 px-4 py-2">Customer On-boarding</button>
            </div>
            <div className="col-md-4 mt-2 mb-2 text-center">
              <button onClick={() => setShow('Forms')} className="asd23 px-4 py-2">Lead Forms</button>
            </div>
          </div>
          {show === 'Applications' ? (
            <div className="card bg-light shadow ops2">
                <div className="card-body">
                    




                <div className="row justify-content-center sdfsd2">




            
<div className="col-md-6 text-center">
  <div className="adr23">
    <img className="asd45" src={img1} width="100%" alt="Forms" />
  </div>
</div>
<div className="col-md-6 text-start">
  <div className='tyu245'>

  <span className="d-block we2">Make the right first impression, collect all the info as a user signs up for the first time.</span>
  <span className="d-block we4 mt-3">Coding is not required to make an app. You can create fully customized apps that can be downloaded onto any smartphone, tablet, or computer using Jotform's free no-code app builder.</span>
  <button className="asd22 px-4 py-2 mt-4">Get demo</button>
  </div>
</div>
</div>















                </div>
            </div>
          ) : show === 'Customer' ? (
            <div className="card bg-light shadow ops2">
            <div className="card-body">
                




            <div className="row justify-content-center sdfsd2">




        
<div className="col-md-6 text-center">
<div className="adr23">
<img className="asd45" src={img1} width="100%" alt="Forms" />
</div>
</div>
<div className="col-md-6 text-start">
<div className='tyu245'>

<span className="d-block we2">Make the right first impression, collect all the info as a user signs up for the first time.</span>
<span className="d-block we4 mt-3">Coding is not required to make an app. You can create fully customized apps that can be downloaded onto any smartphone, tablet, or computer using Jotform's free no-code app builder.</span>
<button className="asd22 px-4 py-2 mt-4">Get demo</button>
</div>
</div>
</div>















            </div>
        </div>
          ) : show === 'Forms' ? (
            <div className="card bg-light shadow ops2">
            <div className="card-body">
                




            <div className="row justify-content-center sdfsd2">




        
<div className="col-md-6 text-center">
<div className="adr23">
<img className="asd45" src={img1} width="100%" alt="Forms" />
</div>
</div>
<div className="col-md-6 text-start">
<div className='tyu245'>

<span className="d-block we2">Make the right first impression, collect all the info as a user signs up for the first time.</span>
<span className="d-block we4 mt-3">Coding is not required to make an app. You can create fully customized apps that can be downloaded onto any smartphone, tablet, or computer using Jotform's free no-code app builder.</span>
<button className="asd22 px-4 py-2 mt-4">Get demo</button>
</div>
</div>
</div>















            </div>
        </div>
          
          ) : null}
        </div>
      </section>
    </>
  );
}

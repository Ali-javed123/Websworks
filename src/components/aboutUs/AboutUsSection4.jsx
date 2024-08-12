import React,{useState} from 'react'
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
export default function AboutUsSection4() {
    const [number, Setnumber] = useState("")
    const handleOnChange = (args) => {
        Setnumber(args);
        console.log("number", number)
    
      };
  return (
    <>
    <section style={{marginTop:'5%'}}>  
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-md-6 text-center mb-4">
                    <div className='text-start mb-4'>
                        <span className='d-block text-dark we322 mb-2'>contact us</span>
                        <span className='d-block we2'>Drop us a message and we will get back to you!</span>
                    </div>
                    <div className="form-group mt-3 mb-3 text-start">
                        <label htmlFor="asda" className='text-dark we3122' >Your Name</label>
                        <input type="text" name="asda" className='form-control py-3 bg-transparent' placeholder='Your name' id="asda" />
                    </div>
                    <div className="form-group mt-3 mb-3 text-start">
                        <label htmlFor="asda" className='text-dark we3122' >Your Conact Number</label>
                        <ReactPhoneInput
                                        style={{ backgroundColor: "transparent",width:"100% !important" }}  value={number} onChange={handleOnChange}
                                        defaultCountry="nl" enableSearchField />
                    </div>
                    <div className="form-group mt-3 mb-3 text-start">
                        <label htmlFor="asda" className='text-dark we3122' >Your e-mail</label>
                        <input type="text" name="asda" className='form-control py-3 bg-transparent' placeholder='Your e-mail' id="asda" />
                    </div>
                    <div className="form-group mt-3 mb-3 text-start">
                        <label htmlFor="asasd" className='text-dark we3122' >Your message</label>
                        <textarea name="asasd" rows={'3'} id="asasd" className='form-control bg-transparent py-3' placeholder='Your message here'/>
                    </div>
                    <div className='mt-3 mb-3'>
                    <button type='submit' className='sada22 btn btn-block w-100 py-3 mt-3' >Send</button>

                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

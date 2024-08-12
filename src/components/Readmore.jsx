import React, { useState } from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';
export default function  ReadMore ({ items}) {
    const [showAll, setShowAll] = useState(false);
  
    const handleToggle = (item) => {
      setShowAll(!showAll);
    };
  
    const renderItems3 = showAll ? items : items.slice(0, 3);
    const renderItems2 = showAll ? items : items.slice(0, 4);




  console.log('>>>>>>')
    return (
      <div>
        <ul className='op48 py-2 mt-3 mb-3'>
          {renderItems3.map((item, index) => (
            <>
            
            <li className='mb-3 mt-3' key={index}> < IoMdCheckmarkCircleOutline className='text-dark' /> {item}</li>
            </>
          ))}
          
      <NavLink to='#'  className={'d-inline fw-25 fw-bolder text-primary'} onClick={()=>handleToggle()}>
        {showAll ? 'Show Less' : 'Read More'}
      </NavLink>
        </ul>
      </div>
    );
  };
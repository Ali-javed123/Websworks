import React, { useState } from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';
export default function  Showless ({ items}) {
    const [showAll, setShowAll] = useState(false);
  
    const handleToggle = (item) => {
      setShowAll(!showAll);
    };
  
    const renderItems3 = showAll ? items : items.slice(0, 3);




  console.log('>>>>>>')
    return (
      <div>
        <ul className='op48 mt-3 mb-3'>
          {renderItems3.map((item, index) => (
            <>
            
            <li className='mb-3 mt-3 text-light' key={index}> < IoMdCheckmarkCircleOutline className='text-light' /> {item}</li>
            </>
          ))}
          
      <NavLink to='#'  className={'d-inline text-light fw-25 fw-bolder '} onClick={()=>handleToggle()}>
        {showAll ? 'Show Less' : 'Read More'}
      </NavLink>
        </ul>
      </div>
    );
  };
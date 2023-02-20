import React, { useState } from 'react'
import './index.scss'

const StreetCards = ({street}) => {
    const [modal, setModal] = useState(false)
  return (
    <>
        <img 
            key={street.streetId}
            src={street.streetImg} 
            alt="IMG"
            title={street.streetTitle}
            onClick={()=>setModal(!modal)}
            className="Street-Image"
            />
        
        {modal &&
        <div
            className='Street-Modal'
            onClick={()=>setModal(!modal)}>

            <img 
                key={street.streetId}
                src={street.streetImg}
                alt="IMG"
                title={street.streetTitle}
                className="Street-Modal-Image" />
            
        </div>
        }
    </>
  )
}

export default StreetCards
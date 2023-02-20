import React, { useState } from 'react'
import './index.scss'

const PortraitCards = ({port}) => {
    const [modal, setModal] = useState(false)

  return (
    <>
        <img 
            key={port.portId}
            src={port.portImg} 
            alt="IMG"
            title={port.portTitle}
            onClick={()=>setModal(!modal)}
            className="Portrait-Image"
            />
        
        {modal &&
        <div
            className='Portrait-Modal'
            onClick={()=>setModal(!modal)}>

            <img 
                key={port.portId}
                src={port.portImg}
                alt="IMG"
                title={port.portTitle}
                className="Portrait-Modal-Image" />
            
        </div>
        }
    </>
  )
}

export default PortraitCards
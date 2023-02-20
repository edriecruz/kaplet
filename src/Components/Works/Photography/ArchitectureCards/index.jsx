import React, { useState } from 'react'
import './index.scss'

const ArchitectureCards = ({arch}) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <img 
        key={arch.archId}
        src={arch.archImg}
        alt="IMG"
        title={arch.archTitle}
        onClick={()=>setModal(!modal)}
        className="Architecture-Image"
         />

      {modal && 
      <div 
        className='Architecture-Modal'
        onClick={()=>setModal(!modal)}>

        <img 
          key={arch.archId}
          src={arch.archImg} 
          alt="IMG"
          title={arch.archTitle}
          className="Architecture-Modal-Image"
          />

      </div>}
    </>
  )
}

export default ArchitectureCards
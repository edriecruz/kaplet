import React, { useState } from 'react'
import './index.scss'

const LayoutCards = ({layout}) => {

  const [modal, setModal] = useState(false)

  return (
    <>
    <img 
      key={layout.layoutId}
      src={layout.layoutImg}
      alt="IMG"
      title={layout.layoutTitle}
      onClick={()=>setModal(!modal)}
      className="Layout-Image" />
      
      {modal && 
      <div 
        className='Layout-Modal'
        onClick={()=>setModal(!modal)}>

        <img 
          key={layout.layoutId}
          src={layout.layoutImg} 
          alt="IMG"
          title={layout.layoutTitle}
          className="Layout-Modal-Image"
          />

      </div>}
    </>
  )
}

export default LayoutCards
import React, { useState } from 'react'
import './index.scss'

const LogoCards = ({logo}) => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <img 
      key={logo.logoId}
      src={logo.logoImg}
      alt="IMG"
      title={logo.logoTitle}
      onClick={()=>setModal(!modal)}
      className="Logo-Image" />
      
      {modal && 
      <div 
        className='Logo-Modal'
        onClick={()=>setModal(!modal)}>

        <img 
          key={logo.logoId}
          src={logo.logoImg} 
          alt="IMG"
          title={logo.logoTitle}
          className="Logo-Modal-Image"
          />

      </div>}
    </>
  )
}

export default LogoCards
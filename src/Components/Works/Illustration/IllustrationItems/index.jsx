import React, { useState } from 'react'
import './index.scss'

const IllustrationCards = ({illu}) => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <img 
      key={illu.illuId}
      src={illu.illuImg}
      alt="IMG"
      title={illu.illuTitle}
      onClick={()=>setModal(!modal)}
      className="Illu-Image" />
      
      {modal && 
      <div 
        className='Illu-Modal'
        onClick={()=>setModal(!modal)}>

        <img 
          key={illu.illuId}
          src={illu.illuImg} 
          alt="IMG"
          title={illu.illuTitle}
          className="Illu-Modal-Image"
          />

      </div>}
    </>
  )
}

export default IllustrationCards
import React, { useState } from 'react'
import './index.scss'

const FreebiesItems = ({free}) => {
  const [modal, setModal] = useState(false)

  return (
    <>
    <a 
      href={free.freeImg}
      target='_blank'
      className='Free-Img-Link'>
    <img 
      key={free.freeId}
      src={free.freeImg}
      alt="IMG"
      title={free.freeTitle}
      onClick={()=>setModal(!modal)}
      className="Free-Img" />
    </a>
    </>
  )
}

export default FreebiesItems
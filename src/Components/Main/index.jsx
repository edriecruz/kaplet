import React from 'react'
import Header from '../Header'
import './index.scss'

const Main = () => {
  return (
    <>
        <Header />
        
          <div className="Main">
            <div className="Main-Content">
            <video 
              playsinline="playsinline" 
              autoplay="autoplay" 
              muted="muted" 
              loop="loop"
              className='Main-Video'>
              <source 
                src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/Niki_1.mp4?alt=media&token=5db21b50-fd47-4cb9-aa3c-1b57e69b3cda" 
                type="video/mp4" />
            </video>

            </div>
          </div>
    </>
  )
}

export default Main
import React from 'react'
import Navbar from '../Navbar'
import './index.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>

        <Link 
          to="/" 
          style={{textDecoration: "none"}}>

            <div className='KapletLogo' />        

        </Link>
 

      {/* <img src="https://firebasestorage.googleapis.com/v0/b/kaplet-f04c1.appspot.com/o/Images%2FAsset%204.png?alt=media&token=26fff36f-b087-43d1-993d-e2c46822b30d" alt="small-logo" className='full'/>
          <img src="https://firebasestorage.googleapis.com/v0/b/kaplet-f04c1.appspot.com/o/Images%2FAsset%202.png?alt=media&token=cbcac618-28f3-4eed-8290-632a5bdb9367" alt="large-logo" className='mobile' /> */}
          

        <Navbar />
    </div>
  )
}

export default Header
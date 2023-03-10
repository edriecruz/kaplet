import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header'
import './index.scss'

const Works = () => {

  const [checked, setChecked] = useState("");

  const isChecked = (value) => value === checked;

  const onSelect = ({ target: { value } }) => {
    setChecked(value);
  };

  return (
    <>

    <Header />

    <div className="Works">

      <div className="Works-Content-Container">

        {/* <p className="Works-Content-Container-Title">
          Click circles to see through my works.
        </p> */}
      
        <div className="Photography Works-Content">

          <Link 
          to='/Photography'>

          <div className="Photography-Cover">

            <div className="Photography-Cover-Images">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/Architecture%2FArch_IMG_2.jpg?alt=media&token=a1091d18-95c8-4382-bd20-5ba9f476f8fa" 
              alt=""
              className='Photography-Cover-Image-1' />
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/Portrait%2FPort_IMG_10.jpg?alt=media&token=fc7e44f8-414e-4142-a206-4e16f079c9a9" 
              alt="" 
              className='Photography-Cover-Image-2'/>
            </div>
            

        <div className="Photography-Cover-Animate">
          <p className='Photography-Cover-Title'>Photography</p>
        </div>

        </div>

        </Link>
        </div>

      <div className="Layout Works-Content">

        <Link 
        to='/Layout'>

        <div className="Layout-Cover">
          <div className="Layout-Cover-Images">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/Layout%2FGestalt%20Meet%20FA.jpg?alt=media&token=e1f1f3f2-2342-4128-b3e6-113efdf1595b" 
            alt="" 
            className='Layout-Cover-Image-1'/>
            <img 
            src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/Layout%2F2.jpg?alt=media&token=7623d0cf-a997-4d0e-8c6d-218b6e4c2fbb" 
            alt="" 
            className='Layout-Cover-Image-2'/>
          </div>
          
          <div className="Layout-Cover-Animate">
            <p className='Layout-Cover-Title'>Layout & Design</p>
          </div>
        </div>
        </Link>
      </div>

      <div className="Illustration Works-Content">
        <Link 
          to='/Illustration'>
        <div className="Illustration-Cover">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/Illustration%2Fcharacter%20study.jpg?alt=media&token=1de5cdd2-1814-4897-8fb6-19fb2099a13c" 
            alt=""
            className='Illustration-Cover-Image' />
          <div className="Illustration-Cover-Animate">  
            <p className='Illustration-Cover-Title'>Illustration</p>
          </div>
        </div>
        </Link>
      </div>

      <div className="Logo Works-Content">

        <Link 
          to='/Logo'>
        <div className="Logo-Cover">
          <div className="Logo-Cover-Images">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/Logo%2FAsset%2011.svg?alt=media&token=1719f593-f078-4f11-a14b-ebf5f8a65595" 
            alt=""
            className='Logo-Cover-Image-1' />
          
          <div className="Logo-Cover-Images-Column">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/Logo%2FAsset%2038.svg?alt=media&token=4a2620dd-6491-4046-a005-a9d580254f73" 
              alt=""
              className='Logo-Cover-Image-2' />
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/Logo%2F3D_Normal.svg?alt=media&token=cd4317ad-5046-42b0-9da2-d0b2b042f418" 
              alt=""
              className='Logo-Cover-Image-3' />
          </div>
          </div>

          <div className="Logo-Cover-Animate">
            <p className="Logo-Cover-Title">Logo</p>
          </div>
        </div>
        </Link>
      </div>
      

      </div>

      

      {/* <div className="radio-flex">

      <label className='radio'>

      <input 
      type="radio" name="Works" value="Photography"
      checked={isChecked("Photography")}
      onChange={onSelect}
      id="Photography" 
      className='Works-Photography-Button'
      />
      <span className='checkmark-1'></span>

      </label>
      
      <label className='radio'>

      <input 
      type="radio" name="Works" value="Layout"
      checked={isChecked("Layout")}
      onChange={onSelect}
      id="Layout" 
      className='Works-Layout-Button' />
      <span className='checkmark-2'></span>

      </label>

      <label className='radio'>

      <input 
      type="radio" name="Works" value="Illustration"
      checked={isChecked("Illustration")}
      onChange={onSelect}
      id="Illustration" 
      className='Works-Illustration-Button' />
      <span className='checkmark-3'></span>

      </label>

      <label className='radio'>

      <input 
      type="radio" name="Works" value="Logo"
      checked={isChecked("Logo")}
      onChange={onSelect}
      id="Logo" 
      className='Works-Logo-Button' />    
      <span className='checkmark-4'></span>

      </label>

      </div> */}
      
    </div>
        
    </>
  )
}

export default Works
import React, { useState, useEffect } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

import { database } from '../../../firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import LogoCards from './LogoCards'

const Logo = () => {

  const [Logo, setLogo] = useState([])

  const logoCollectionRef = collection(database, "Logo")
  useEffect(() => {
    onSnapshot(logoCollectionRef, snapshot => {
      setLogo(snapshot.docs.map(doc => {
        return {
          logoId: doc.logoId,
          ...doc.data(),
        }
      }))
    })
  }, [])

  return (
    <div className='Logo-Page'>
      <button className='Logo-Back'>
      <Link 
        to='/Works'
        style={{
          textDecoration: 'none',
          color: 'black'
        }}>Back</Link>
    </button>

    <div className="Logo-Content">
    <p className="Logo-Title">Logo</p>
      {Logo.sort((a, b) => a.logoId > b.logoId ? 1 : -1).map((logo) => (
        <LogoCards
          className="Logo-Cards" 
          logo={logo}
          key={logo.logoId} />
      ))}
    </div>
    </div>
  )
}

export default Logo
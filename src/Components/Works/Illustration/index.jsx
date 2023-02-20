import React, { useState, useEffect } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import IllustrationCards from './IllustrationItems'

import { database } from '../../../firebase'
import { collection, onSnapshot } from 'firebase/firestore'

const IllustrationPage = () => {

  const [Illustration, setIllustration] = useState([])

  const illuCollectionRef = collection(database, "Illustration")
  useEffect(() => {
    onSnapshot(illuCollectionRef, snapshot => {
      setIllustration(snapshot.docs.map(doc => {
        return {
          illuId: doc.illuId,
          ...doc.data(),
        }
      }))
    })
  }, [])

  return (
    <div className='Illustration-Page'>
      <button className='Illustration-Back'>
      <Link 
        to='/Works'
        style={{
          textDecoration: 'none',
          color: 'black'
        }}>Back</Link>
    </button>

    <div className="Illustration-Content">
    <p className="Illustration-Title">Illustration</p>
      {Illustration.sort((a, b) => a.illuId > b.illuId ? 1 : -1).map((illu) => (
        <IllustrationCards 
          className="Illustration-Cards" 
          illu={illu}
          key={illu.illuId} />
      ))}
    </div>
    </div>
  )
}

export default IllustrationPage
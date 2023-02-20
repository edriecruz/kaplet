import React, { useState, useEffect } from 'react'
import './index.scss'

import { database } from '../../../firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import FreebiesItems from '../FreebiesItems'
import { Link } from 'react-router-dom'

const FreebiesPage = () => {

  const [Freebies, setFreebies] = useState([])

  const freeCollectionRef = collection(database, "Freebies")
  useEffect(() => {
    onSnapshot(freeCollectionRef, snapshot => {
      setFreebies(snapshot.docs.map(doc => {
        return {
          freeId: doc.freeId,
          ...doc.data(),
        }
      }))
    })
  }, [])

  return (
    <div className='Freebies-Page'>
      <button className='Freebies-Page-Back'>
      <Link 
        to='/Freebies'
        style={{
          textDecoration: 'none',
          color: 'black'
        }}>Back</Link>
      </button>

      <div className="Freebies-Page-Title">
        <p className='Freebies-Page-Title-Text'>Freebies</p>
        <p className="Freebies-Page-Title-Description">Click to view image in larger size.</p>
      </div>

      <div className="Freebies-Page-Items">
      {Freebies.sort((a, b) => a.freeId > b.freeId ? 1 : -1).map((free) => (
        <FreebiesItems 
          free={free}
          key={free.freeId} />
      ))}
      </div>

    </div>
  )
}

export default FreebiesPage
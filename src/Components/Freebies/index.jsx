import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import './index.scss'

import { database } from '../../firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import FreebiesItems from './FreebiesItems'

const Freebies = () => {

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
    <>
        <Header />

        <div className='Freebies'>

        <div className="Freebies-Items">
        {Freebies.slice(0, 2).sort((a, b) => a.freeId > b.freeId ? 1 : -1).map((free) => (
        <FreebiesItems 
          free={free}
          key={free.freeId} />
      ))}
        </div>

        
        <Link 
        to='/FreebiesPage'
        className='Freebies-Page-Link'
        style={{textDecoration: 'none'}}>
          <p className='Freebies-Page-Link-p'>Check Full Freebies</p>
        </Link>

        </div>
    </>
  )
}

export default Freebies
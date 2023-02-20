import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import ArchitectureCards from './ArchitectureCards'

import { database } from '../../../firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import PortraitCards from './PortraitCards'
import StreetCards from './StreetCards'

const Photography = () => {

  const [Architecture, setArchitecture] = useState([])
  const [Portrait, setPortrait] = useState([])
  const [Street, setStreet] = useState([])

  const archCollectionRef = collection(database, "Architecture")
  useEffect(() => {
    onSnapshot(archCollectionRef, snapshot => {
      setArchitecture(snapshot.docs.map(doc => {
        return {
          archId: doc.archId,
          ...doc.data(),
        }
      }))
    })
  }, [])
  const streetCollectionRef = collection(database, "Streets")
  useEffect(() => {
    onSnapshot(streetCollectionRef, snapshot => {
      setStreet(snapshot.docs.map(doc => {
        return {
          streetId: doc.streetId,
          ...doc.data(),
        }
      }))
    })
  }, [])
  const portCollectionRef = collection(database, "Portrait")
  useEffect(() => {
    onSnapshot(portCollectionRef, snapshot => {
      setPortrait(snapshot.docs.map(doc => {
        return {
          portId: doc.portId,
          ...doc.data(),
        }
      }))
    })
  }, [])
  
  return (
    <div className='Photography'>

    <button className='Photography-Back'>
      <Link 
        to='/Works'
        style={{
          textDecoration: 'none',
          color: 'black'
        }}>Back</Link>
    </button>

    <div className="Photography-Content">

      <div className="Photography-Architecture">
        <p className="Architecture-Title">Architecture</p>
      {Architecture.sort((a, b) => a.archId > b.archId ? 1 : -1).map((arch) => (
        <ArchitectureCards 
          className="Photography-Architecture-Cards" 
          arch={arch}
          key={arch.archId} />
      ))}
      </div>

      <div className="Photography-Street">
        <p className="Street-Title">Street</p>
        {Street.sort((a, b) => a.streetId > b.streetId ? 1 : -1).map((street) => (
        <StreetCards
          className="Photography-Street-Cards" 
          street={street}
          key={street.streetId} />
      ))}
      </div>

      <div className="Photography-Portrait">
        <p className="Portrait-Title">Portrait</p>
        {Portrait.sort((a, b) => a.portId > b.portId ? 1 : -1).map((port) => (
        <PortraitCards
          className="Photography-Portrait-Cards" 
          port={port}
          key={port.portId} />
      ))}
      </div>
      
    </div>

    </div>
  )
}

export default Photography
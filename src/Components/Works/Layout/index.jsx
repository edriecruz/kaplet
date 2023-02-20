import React, { useState, useEffect } from 'react'
import './index.scss'
import LayoutCards from './LayoutCards'
import { Link } from 'react-router-dom'

import { database } from '../../../firebase'
import { collection, onSnapshot } from 'firebase/firestore'

const Layout = () => {

  const [Layout, setLayout] = useState([])

  const layoutCollectionRef = collection(database, "Layout")
  useEffect(() => {
    onSnapshot(layoutCollectionRef, snapshot => {
      setLayout(snapshot.docs.map(doc => {
        return {
          layoutId: doc.layoutId,
          ...doc.data(),
        }
      }))
    })
  }, [])

  return (
    <div className='Layout-Page'>
      <button className='Layout-Back'>
      <Link 
        to='/Works'
        style={{
          textDecoration: 'none',
          color: 'black'
        }}>Back</Link>
    </button>

    <div className="Layout-Content">
        <p className="Layout-Title">Layout</p>
      {Layout.sort((a, b) => a.layoutId > b.layoutId ? 1 : -1).map((layout) => (
        <LayoutCards 
          className="Layout-Cards" 
          layout={layout}
          key={layout.layoutId} />
      ))}
    </div>
    </div>
  )
}

export default Layout
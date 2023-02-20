import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import './index.scss'
import gsap from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const app = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    tl.current = gsap.timeline()
      .from(".Navbar-gsap", {
        x: 320
      });
    }, app);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    tl.current.reversed(open);    
  }, [open]);

  return (
    <div className='Navbar' ref={app}>

      <div className='Navbar-gsap'>

      <div className='Navbar-Icon' media="(max-width: 720px)" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faCaretLeft} size='3x'/>
      </div>
            <ul>
                <Link 
                to="/About" 
                style={{textDecoration: "none"}}>
                  <li>About</li>
                </Link>

                <Link 
                to="/Works" 
                style={{textDecoration: "none"}}>
                  <li>Works</li>
                </Link>

                <Link 
                to="/Freebies" 
                style={{textDecoration: "none"}}>
                  <li>Freebies</li>
                </Link>
                
            </ul>


      </div>
      
      </div>
  )
}

export default Navbar
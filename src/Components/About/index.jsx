import { faBehance, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../Header'
import './index.scss'

const About = () => {
  return (
    <>
        <Header />

        <div className="About">
          <div className="About-Top-Content">
            <img 
                src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/About%2FAYDEE.png?alt=media&token=3f0a367a-bb43-4bf3-b253-a03a98f6a821" 
                alt=""
                className='About-Img'/>
                <p className='About-Text'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quod? Vel qui, reprehenderit voluptatem iure modi excepturi temporibus unde voluptas nesciunt dolorem a sint explicabo, veritatis quod nam incidunt minima!
                </p>
          </div>

          <div className="About-Middle-Content">
            <div className="About-Socials">
              <div className="Behance">
                <a 
                  href="https://www.behance.net/kaplet-Cruz "
                  rel="noreferrer noopener"
                  target="_blank">
                  <FontAwesomeIcon icon={faBehance} size='2x'/>
                </a>
                </div>
              <div className="Facebook">
                <a 
                  href="https://www.facebook.com/kapletcruz"
                  rel="noreferrer noopener"
                  target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} size='2x'/>
                </a>
              </div>
              <div className="Instagram">
                <a 
                  href="http://www.instagram.com/kapletcruz/"
                  rel="noreferrer noopener"
                  target="_blank">
                  <FontAwesomeIcon icon={faInstagram} size='2x'/>
                </a>
                
              </div>
            </div>
            <div className="About-QR">
              <a 
                href="https://linko.page/rofofvc5ya2e"
                target='_blank'
              >
              <img 
              src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/About%2Fkapletplus.png?alt=media&token=0209bab7-a936-41de-86d3-7fd59ce9d3ba" 
              alt=""
              className='QR-Kaplet' />
              </a>
            </div>
          </div>

          <div className="About-Footer-Content">
            <div className="Edrie-Logo">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/About%2FE%20(1).png?alt=media&token=c0a8d6b6-b299-4540-b417-08d0577bb417" 
                alt=""
                className='Edrie-Logo-Img' />
            </div>
            <div className="Collab-Logo">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/Logos%2FE.png?alt=media&token=0b10bf72-291d-4c64-8833-a1974119a5b6" 
                alt=""
                className='Collab-Logo-Img' />
            </div>
            <div className="Kaplet-Logo">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/kaplet-f82b1.appspot.com/o/Logos%2FAsset3.png?alt=media&token=0ce26329-2387-4fb2-bcb9-30aee43f8522"
                alt=''
                className='Kaplet-Logo-Img' />
            </div>
          </div>
            
            
        </div>
    </>
  )
}

export default About
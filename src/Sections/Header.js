import React from 'react'
import Image from './Elements/Image'

// IMAGES Imports
import LogoWhite from '../Assets/img/Bruneza-logo-white.png'
import LogoBlack from '../Assets/img/Bruneza-logo-black.png'


function Header() {
  return (
    <>
    <header className="page-header">
        <div className="container">
            <div className="col col-1"> 
            <Image img={LogoBlack} />
            </div>
            <nav className="col col-2">
              MENU</nav>  
              <div className="col col-3">
              Hire Me</div>  
        </div>
    </header>
    </>
  )
}

export default Header
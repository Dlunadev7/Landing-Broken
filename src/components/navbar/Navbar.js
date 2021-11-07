import React, { useState } from 'react'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

export const Navbar = () => {

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <nav className="col-md-10 mx-md-auto d-flex justify-content-between align-items-center h-100">
      <a href="/" className="navbar-brand d-flex align-items-center">
        <span>
          <p className="h2 text-white">LB.</p>
          <small className="text-muted">Consultor Inmobiliario</small>
        </span>
      </a>
      <div className="d-flex d-md-none navbar navbar-dark" onClick={ handleClick }>
        <button className="navbar-toggler o-none" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <DesktopMenu />
      {
        isClicked
          &&
        <MobileMenu />
      }
    </nav>
  )
}

import React from 'react'
export const MobileMenu = () => {
  return (
    <div className="mobile-menu text-white navbar navbar-expand d-flex justify-content-left dark-bg w-100 h-auto">
      <ul className="navbar-nav d-flex justify-content-between flex-column">
        <li className="navbar-item mx-lg-4 mx-2 fs-20">
          <a href="/" className="nav-link text-white" id="home">Bio</a>
        </li>
        <li className="navbar-item mx-lg-4 mx-2 fs-20">
          <a href="/propiedades" className="nav-link text-white">Propiedades</a>
        </li>
        <li className="navbar-item mx-lg-4 mx-2 fs-20">
          <a href="#someLink" className="nav-link text-white">Contacto</a>
        </li>
        <li className="navbar-item mx-lg-4 mx-2 fs-20">
          <a href="#someLink" className="nav-link text-white">Blog</a>
        </li>
      </ul>
    </div>
  )
}

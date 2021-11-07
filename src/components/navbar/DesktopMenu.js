import React from 'react';

export const DesktopMenu = () => {
  return (
    <div className="desktop-menu text-white navbar navbar-expand-lg navbar-expand col-lg-4 d-flex justify-content-end">
      <ul className="navbar-nav d-flex justify-content-between">
        <li className="navbar-item mx-lg-4 mx-2 fs-20">
          <a href="/" className="nav-link text-white" id="home">Bio</a>
        </li>
        <li className="navbar-item mx-lg-4 mx-2 fs-20">
          <a href="#propiedades" className="nav-link text-white">Propiedades</a>
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

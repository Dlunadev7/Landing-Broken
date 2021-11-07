import React from 'react'

export const SocialNetwork = () => {
  return (
    <div className="social__network d-none d-lg-block">
      <ul className="nav d-flex flex-column h-30 justify-content-between">
        <li className="nav-item border rounded">
          <a className="nav-link fs-12" href="#facebook">
            <span className="icon-facebook"></span>
          </a>
        </li>
        <li className="nav-item border rounded">
          <a className="nav-link fs-12" href="#instagram">
            <span className="icon-instagram"></span>
          </a>
        </li>
        <li className="nav-item border rounded">
          <a className="nav-link fs-12" href="#twitter">
            <span className="icon-twitter"></span>
          </a>
        </li>
        <li className="nav-item border rounded">
          <a className="nav-link fs-12" href="#home">
            <span className="icon-home"></span>
            <p className="text-icon text-uppercase font-weight-bold mt-2">Propiedades</p>
          </a>
        </li>
      </ul>
    </div> 
  )
}

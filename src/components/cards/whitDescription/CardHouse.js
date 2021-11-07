import React from 'react'
import { cardHouseData } from './CardData'

export const CardHouse = () => {

  const cardHousesData = cardHouseData.map((item, i) => {
    return (
      <div className="card shadow-sm rounded" key={ i }>
        <span className="ticket d-flex justify-content-center align-items-center">
          VENTA
        </span>
        <img src="https://tse3.mm.bing.net/th?id=OIP.xcTz-iI5Yzr-wUwro8CcewHaFj&pid=Api" className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between card-details mb-3">
            <div className="card-enviroments">
            <span className="bg-secondary p-1 fs-12 border border-2"> { item.type} </span>
            <span className="bg-secondary p-1 fs-12 border border-2 mx-1"> { item.environment } </span>
            </div>
            <div className="card-surface">
              <p className="fs-12 fw-normal"> { item.surface } </p>
            </div>
          </div>
          <span className="card-description">
            <h5 className="card-title m-0"> { item.title } </h5>
            <i className="icon-location text-muted"> { item.location } </i>
          </span>
          <p className="card-text text-uppercase my-4 fs-12"> { item.text } </p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="fw-bold text-orange fs-22"> { item.price } </p>
            <button className="btn rounded-circle d-flex align-items-center justify-content-center">
              <i className="icon-add fs-5 text-white"></i>
            </button>
          </div>
        </div>
      </div>
    )
  })

  return (
    cardHousesData
  )
}

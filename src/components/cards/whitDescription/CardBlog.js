import React from 'react'
import { cardBlogData } from './CardData'

export const CardBlog = () => {

  const cardsBlog = cardBlogData.map((item, i) => {
    return (
      <div className="card card-blog mt-55 mx-2" key={ i }>
        <img className="card-blog-image card-img-top" src="https://tse3.mm.bing.net/th?id=OIP.xcTz-iI5Yzr-wUwro8CcewHaFj&pid=Api" alt="..." />
        <div className="card-body p-4">
          <h5 className="card-title text-orange fw-bold mb-3"> { item.title } </h5>
          <p className="card-text fw-bold"> { item.text } </p>
        </div>
        <div className="card-footer d-flex align-items-center justify-content-between w-100 h-100 bg-white border-0" >
        <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row w-100">
            <button className="btn btn-blog fw-bold text-orange d-flex align-items-center justify-content-center">Leer nota completa</button>
            <span className="text-orange fw-bold fs-12 mt-16">
              { item.date }
            </span>
          </div>
        </div>
      </div>
    )
  })

  return (
    cardsBlog
  )

}

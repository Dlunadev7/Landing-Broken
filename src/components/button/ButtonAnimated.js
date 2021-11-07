import React from 'react'

export const ButtonAnimated = ({ btnText }) => {
  return (
    <div className="col-12 d-flex justify-content-center mt-85">
      <button className="btn btn-two cta-blog">
        <span>{ btnText }</span>
      </button>  
    </div>
  )
}

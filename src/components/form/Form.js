import React from 'react'
import { ButtonAnimated } from '../button/ButtonAnimated'

export const Form = () => {
  return (
    <form className="row">
      <div className="col-sm-12">
        <input type="email" className="form-control border border-bottom my-4" placeholder="Nombre y Apellido" />
      </div>
      <div className="col-sm-12 mt-30">
        <input type="password" className="form-control border border-bottom" placeholder="E-mail*" id="inputPassword4" />
      </div>
      <div className="col-sm-6 mt-30">
        <input type="text" className="form-control border border-bottom my-4" id="inputAddress" placeholder="Telefono" />
      </div>
      <div className="col-sm-6 mt-30">
        <select id="inputState" className="form-select border border-bottom my-4">
          <option>Motivo</option>
          <option>...</option>
        </select>
      </div>
      <div className="col-12">
        <input type="text" className="form-control my-4" id="inputAddress2" placeholder="Mensaje" />
      </div>
      <div className="col-12 d-flex align-items-end justify-content-end">
        <p className="fs-12 text-right">* Campos Obligatorios</p>
      </div>
      <ButtonAnimated btnText="Enviar" />
    </form>
  )
}

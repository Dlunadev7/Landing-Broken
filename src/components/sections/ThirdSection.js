import React from 'react'
import { ButtonAnimated } from '../button/ButtonAnimated'
import { CardHouse } from '../cards/whitDescription/CardHouse'

export const ThirdSection = () => {
  return (
    <section className="main__third__section col-12  pt-55 py-120">
    <div className="container-fluid col-10 h-75 m-auto m-lg-auto d-flex flex-column align-items-center justify-content-center">
      <p className="main__section__third__title fs-55 w-100">Propiedades <span className="text-orange">Destacadas</span></p>
      <div className="mt-55 d-flex flex-wrap flex-row justify-content-between w-100">
        <CardHouse />
      </div>
      <ButtonAnimated btnText="Ver todas las propiedades" />
    </div>
  </section>
  )
}

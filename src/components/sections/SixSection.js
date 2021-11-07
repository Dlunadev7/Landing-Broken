import React from 'react';
import { CardBlog } from '../cards/whitDescription/CardBlog';

import Component53 from '../../assets/Component-53–2.svg';
import { ButtonAnimated } from '../button/ButtonAnimated';

export const SixSection = () => {
  return (
    <section className="main__six__section col-12 pt-55 py-120">
      <div className="container-fluid col-10 d-flex justify-content-between flex-column h-100">
        <p className="fs-30 text-white main__six__section__title">Blog / <span className="text-orange fw-bold">Novedades</span> </p>
        <div className="main__section__six__container d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <CardBlog />
        </div>
        <ButtonAnimated btnText="Ver todas las propiedades" />
      </div>
      <img className="main__six__arrow__image mx-4 d-lg-block" src={ Component53 } alt="" />
    </section>
  )
}

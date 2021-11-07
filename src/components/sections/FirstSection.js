import React from 'react'

import MaskGroup from '../../assets/MaskGroup2.jpg'
import { FabSlide } from '../fabs/slide/FabSlide'

export const FirstSection = () => {
  return (
    <section className="main__first__section">
      <img className="main__image__presentation h-100 w-100" src={ MaskGroup } alt="" />
      <FabSlide />
    </section>
  )
}

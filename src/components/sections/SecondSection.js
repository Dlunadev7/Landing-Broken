import React, { useEffect, useRef, useState } from 'react'

import AlSultanAbdullahsignature  from '../../assets/1280px-Al-Sultan_Abdullah_signature.svg'
import BusinessMan  from '../../assets/businessman.png';
import Component55  from '../../assets/Component-55–1.svg';


export const SecondSection = () => {

  const [IsTitleVisible, setIsTitleVisible] = useState('')
  const [IsTextVisible, setIsTextVisible] = useState('')
  const titleRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const mainTitle = titleRef.current;
      const { y:yTitle } = mainTitle.getBoundingClientRect();

      const visibleTitle = yTitle <= 250 ? 'main__section__two__title--active' : null;
      setIsTitleVisible(visibleTitle)

      const mainText = textRef.current;
      const { y:yText } = mainText.getBoundingClientRect();

      const visibleText = yText <= 571 ? 'main__section__two__text__description--active' : null;
      setIsTextVisible(visibleText)
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <section className="main__second__section col-12 py-120" id="second--section">
      <div className="container-fluid col-10 d-flex justify-content-between">
        <div className="main__second__container col-xl-4">
          <h1 className={`main__section__two__title ${ IsTitleVisible } fw-normal fs-55`} ref={ titleRef }>
            ¡Hola! <br /> Mi nombre es <br />
            <span className="text-orange fw-bold">Luis Bustos</span>
          </h1>
          <div className={`main__section__two__text__description ${ IsTextVisible }`} ref={ textRef }>
            <p className="mt-5 fs-25 text-left pt-55">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor varius aliquam. Integer quis <span
                className="fw-bold">en Bellagamba</span> <br /> gravida felis vel, molestie Lorem ipsum dolor sit amet,
              consectet onteger qui ur adipiscing elit.
            </p>
            <p className="fs-25 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <span className="main__firm__picture d-flex justify-content-center pt-55">
            <img src={ AlSultanAbdullahsignature } alt="" />
          </span>
        </div>
        <div className="col-7 main__container__image">
          <img className="main__business__image" src={ BusinessMan } alt="" />
        </div>
        <div className="col-2 main__container__component-2">
          <img src={ Component55 } alt="" />
        </div>
      </div>
    </section>
  )
}

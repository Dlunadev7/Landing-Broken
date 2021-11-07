import React, { useEffect, useRef, useState } from 'react'
import { Form } from '../form/Form';

export const FiveSection = () => {

  const [IsFormTitleVisible, setIsFormTitleVisible] = useState('')
  const [IsFormTextVisible, setIsFormTextVisible] = useState('')
  const formTextRef = useRef();
  const formDescriptionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const formText = formTextRef.current;
      const { y:yTitle } = formText.getBoundingClientRect();

      const visibleTitle = yTitle <= 1000 ? 'main__section__five__title--active' : null;
      setIsFormTitleVisible(visibleTitle)

      const formDescription = formDescriptionRef.current;
      const { y:yText } = formDescription.getBoundingClientRect();

      const visibleText = yText <= 1050 ? 'main__section__five__dates--active' : null;
      setIsFormTextVisible(visibleText)
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  return (
    <section className="main__five__section col-12 pt-55 py-120">
      <div className="container-fluid col-10">
        <div className="main__section__five__container row d-flex justify-content-between flex-sm-column">
          <div className="col-lg-5">
            <p className={`fs-30 text-orange main__section__five__title ${ IsFormTitleVisible } mb-5`} ref={ formTextRef }>¿Tomámos un café?</p>
            <span className={`main__section__five__dates ${ IsFormTextVisible }`} ref={ formDescriptionRef }>
              <p className="fs-15 fw-bold dark-color">Whatsapp 11-3479-8081</p>
              <p className="fs-15 fw-bold dark-color">Tel. 4797-5880</p>
              <p className="fs-15 fw-bold dark-color">luisbustos@bellagamba.com</p>
            </span>
          </div>
          <div className="col-lg-7 mt-sm-4">
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

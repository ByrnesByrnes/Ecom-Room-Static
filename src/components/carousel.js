import React, { useState, useEffect } from 'react';
import { heroSlides as slides } from '../heroData'
import { NavLink as Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState('flex-start')

  const prevSlide = () => {
    if (direction === 'flex-start') {
      let firstSlide = slides.shift()
      slides.push(firstSlide)
      setDirection('flex-end')

    }
    setTimeout(() => {
      setCurrent(current => current + 100)
      let lastSlide = slides.pop()
      slides.unshift(lastSlide)
    }, 100)
    setCurrent(current => current = 0)

  }

  const nextSlide = () => {
    if (direction === 'flex-end') {
      let lastSlide = slides.pop()
      slides.unshift(lastSlide)
      setDirection('flex-start')
    }

    setTimeout(() => {
      setCurrent(current => current - 100)
      let firstSlide = slides.shift()
      slides.push(firstSlide)
    }, 100)
    setCurrent(current => current = 0)
  
  }

  useEffect(() => {
    const id = setTimeout(() => nextSlide(), 4000)
    return () => clearTimeout(id)
  }, [current])

  return (
    <div
      className="carousel"
      style={{ justifyContent: direction }}
    >
      {slides.map(slide => (
        <div
          className="carousel__slide"
          key={slide.id}
          style={{
            transform: `translateX(${current}%)`,
            transition: current === 0 ? 'none' : '.4s ease-in-out'
          }}>

          <div className="carousel__image">
            <img src={slide.img} alt={slide.alt} />
          </div>

          <div className="carousel__content">
            <h1 className="carousel__title">{slide.title}</h1>
            <p className="carousel__text">{slide.text}</p>
            <div className="carousel__link">
              <Link
                className="carousel"
                to={ROUTES.BROWSE}
              >Shop Now
                <img src="/images/icon-arrow.svg" alt="Forward Arrow" />
              </Link>
            </div>

          </div>
        </div>
      ))}

      <div className="carousel__arrows">
        <div
          onClick={prevSlide}
          className="carousel__prev">
          <img src="/images/icon-angle-left.svg" alt="Prev Slide" />
        </div>
        <div
          onClick={nextSlide}
          className="carousel__next">
          <img src="/images/icon-angle-right.svg" alt="Next Slide" />
        </div>
      </div>
    </div>
  )
}
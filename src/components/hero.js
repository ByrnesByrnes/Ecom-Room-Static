import React from 'react';
import { Carousel } from '../components'
export default function Hero() {
  return (
    <section className="hero">
      <Carousel />
      <div className="hero__content">

        <img className="hero__image" src="/images/living-room-gray.jpg" alt="" />

        <div className="hero__info">
          <h2 className="hero__subtitle">About Our furniture</h2>
          <p className="hero__text">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>

        <img className="hero__image" src="/images/interior-bean-bags.jpg" alt="" />

      </div>
    </section>
  )
}
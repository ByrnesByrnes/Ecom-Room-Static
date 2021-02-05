import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
    <div className="hero__img">
      <img src="images/desktop-image-hero-1.jpg" alt=""/>
    </div>

    <div className="hero__content">
      <h1 className="hero__title">Discovery innovative ways to decorate</h1>
      <p className="hero__text">We provide unmatched quality. comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
      <div className="hero__link">
        <a href="#" >Shop Now</a>
        <img src="/images/icon-arrow.svg" alt="Forward Arrow"/>
      </div>
    </div>
    </section>
  )
}
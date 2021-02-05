import React, { useState } from 'react';
import { Nav } from './index'

export default function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <img src="/images/logo.svg" alt="room" />
        </div>

        <Nav toggle={toggle} setToggle={setToggle} />
      </div>
    </header>
  )
}
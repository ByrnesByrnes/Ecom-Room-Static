import React, { useState } from 'react';
import { Nav } from './index'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { NavLink as Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function Header({ cart }) {
  const [toggle, setToggle] = useState(false)
  console.log(cart.length)
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__side">
          <Link to={ROUTES.HOME}>
            <div className="header__logo">
              <img src="/images/logo.svg" alt="room" />
            </div>

          </Link>
          <Nav toggle={toggle} setToggle={setToggle} />
        </div>
        <div>
          <Link
            className={`header__side__right ${toggle ? 'open' : ''}`}
            to={ROUTES.CART}>
            <div 
              style={{
                opacity: cart.length > 0 ? '1': '0'
              }}
              className="header__cart__count">
              <span>{cart.length}</span>
            </div>
            <HiOutlineShoppingCart />
          </Link>
        </div>
      </div>
    </header>
  )
}
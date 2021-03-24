import React, { useState, useRef, useEffect } from 'react';
import { Nav } from './index'
import { HiOutlineShoppingCart,HiOutlineUser } from 'react-icons/hi'
import { NavLink as Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {BiRightArrow} from 'react-icons/bi'




export default function Header({ cart }) {
  const [toggle, setToggle] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const userRef = useRef(null)

  useEffect(() => {
    
    const handler = event => {
      if (!userRef.current.contains(event.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__side-left">
          <Link to={ROUTES.HOME}>
            <div className="header__logo">
              <img src="/images/logo.svg" alt="room" />
            </div>

          </Link>
          <Nav toggle={toggle} setToggle={setToggle} />
        </div>

        <div className={`header__side-right ${toggle ? 'open' : ''}`}>

          <div ref={userRef} className="header__user">
            <HiOutlineUser 
              onClick={() => setDropdown(!dropdown)} 
             

            />
            <div 
              className={`header__dropdown ${dropdown ? 'open': ''}`}
            >
              <Link onClick={() => setDropdown(false)} className="header__dropdown__options" to={ROUTES.FAVORITES}>favorite<BiRightArrow/></Link>
              <Link onClick={() => setDropdown(false)} className="header__dropdown__options" to={ROUTES.FAVORITES}>Profile<BiRightArrow/></Link>
              <Link onClick={() => setDropdown(false)} className="header__dropdown__options" to={ROUTES.FAVORITES}>WishList<BiRightArrow/></Link>
              <Link onClick={() => setDropdown(false)} className="header__dropdown__options" to={ROUTES.ORDERS}>Your Orders<BiRightArrow/></Link>
            </div>    
          </div>
          
          <Link
            className="header__cart"
            to={ROUTES.CART}>
            <div 
              className="header__cart__count"
              style={{
                opacity: cart.length > 0 ? '1': '0'
              }}>
              <span>{cart.length}</span>
            </div>
            <HiOutlineShoppingCart />
          </Link>
        </div>
      </div>
    </header>
  )
}
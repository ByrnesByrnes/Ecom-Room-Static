import React, { useEffect, useRef } from 'react';
import {NavLink as Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function Nav({toggle, setToggle}) {

  const domNode = useRef()
  const navList= useRef()


  useEffect(() => {
    const handler = event => {
      if(!domNode.current.contains(event.target) && !navList.current.contains(event.target)) {
        setToggle(false)
      }
    }

    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  },[])


  return (
    <nav className={`nav ${toggle ? 'open' : ''}`}>
      <div 
        ref={domNode}
        onClick={() => setToggle(!toggle)} className="hamburger">
        <span className={`hamburger__line`}></span>
      </div>
    
      <ul className="nav__list" ref={navList}>
        <li className="nav__option">
          <Link to={ROUTES.HOME} className="nav__link active">home</Link>
        </li>
        <li className="nav__option">
          <Link to={ROUTES.BROWSE} className="nav__link">Shop</Link>
        </li>
        <li className="nav__option">
          <Link to={ROUTES.HOME} className="nav__link">About</Link>
        </li>
        <li className="nav__option">
          <Link to={ROUTES.HOME} className="nav__link">contact</Link>
        </li>
      </ul>

    </nav>
  )
}
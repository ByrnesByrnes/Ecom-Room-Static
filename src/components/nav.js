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
        
        <li 
        onClick={() => setToggle(false)}
        className="nav__option">
          <Link to={ROUTES.BROWSE} className="nav__link">Shop</Link>
        </li>
        <li 
          onClick={() => setToggle(false)}
          className="nav__option">
          <Link to={ROUTES.ABOUT} className="nav__link">About</Link>
        </li>
        <li 
          onClick={() => setToggle(false)}
          className="nav__option">
          <Link to={ROUTES.CONTACT} className="nav__link">Contact</Link>
        </li>
      </ul>

    </nav>
  )
}
import React, { useEffect, useRef } from 'react';


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
          <a href="home" className="nav__link active">home</a>
        </li>
        <li className="nav__option">
          <a href="#" className="nav__link">Shop</a>
        </li>
        <li className="nav__option">
          <a href="#" className="nav__link">About</a>
        </li>
        <li className="nav__option">
          <a href="#" className="nav__link">contact</a>
        </li>
      </ul>

    </nav>
  )
}
import React, { useState, useEffect } from 'react';


export default function SideBar({ products, selection, setSelection }) {

  const [categories, setCategories] = useState([])

  
  useEffect(() => {
    const category = [...new Set(products.map(products => products.category))]

   
    setCategories(category)
   
  // return () => category
  }, [products])

  
  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Categories</h3>
      <ul className="sidebar__category">
       
        {categories.map((option, i) => (
          
          <li 
            onClick={() => setSelection(option)}
            key={i} 
            className={`sidebar__option ${selection === option ? 'active' : ''}`}
          >{option}</li>
        ))}   
        
        <li 
          onClick={() => setSelection('')}
          className={`sidebar__option ${selection ? 'clear': 'hide'}`}>clear categories</li>
      </ul>
    </div>
  )
}
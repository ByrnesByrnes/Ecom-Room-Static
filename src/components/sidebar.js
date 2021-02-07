import React, { useState, useEffect } from 'react';


export default function SideBar({ products, setSelection }) {

  const [categories, setCategories] = useState([])

  let category = [...new Set(products.map(products => products.category))]

  useEffect(() => {
    const delay = setTimeout(() => {
      setCategories(category)
    }, 2000);
 
  }, [products])


  //filters category

  console.log(category)
  return (
    <div className="sidebar">
      <ul className="sidebar__category">
    
        {categories.map((option, i) => (
          
          <li 
            onClick={() => setSelection(option)}
            key={i} 
            className="sidebar__option"
          >{option}</li>
        ))}   

      </ul>
    </div>
  )
}
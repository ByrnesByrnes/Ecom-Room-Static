import React, { useState } from 'react';
import { Card, Loader, SideBar } from '../components'
import { GetData } from '../api/getData'

export default function Browse() {
  const [selection, setSelection] = useState('')

  const [products, loading] = GetData()
  console.log(selection)
  
  return loading ? <Loader /> : (
    <section className="browse">
      <SideBar 
        products={products} 
        selection={selection} 
        setSelection={setSelection}
      />
      <div className="browse__content">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
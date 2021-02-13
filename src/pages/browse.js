import React, { useState } from 'react';
import { Card, Loader, SideBar } from '../components'
import { GetData } from '../api/getData'
import { StateContext} from '../context/state'

export default function Browse() {
  const [selection, setSelection] = useState('')

  const [products, loading] = GetData()

  const productsFiltered = products.filter(product => product.category === selection)

  const results = selection ? productsFiltered : products

  return loading ? <Loader /> : (
    <section className="browse">
  
        <SideBar
          products={products}
          selection={selection}
          setSelection={setSelection}
        />

        <div className="browse__content">
          {results.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
    
    </section>
  )
}
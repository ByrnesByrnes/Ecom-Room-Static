import React, { useState, useEffect } from 'react';
import { Card, Loader } from '../components'




export default function Browse() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = 'https://fakestoreapi.com/products'

  useEffect(() => {

    async function getData() {

      try {
        setLoading(true)
        const response = await fetch(baseUrl)
        const data = await response.json()
        if(response.status === 200) {
          setLoading(false)
          console.log('worked')
          setProducts(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
  
    getData()
    
  }, [])

  console.log(loading)
  return loading ? <Loader /> : (
    <section className="browse">
    <div>sidebar</div>
    
      <div className="browse__content">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
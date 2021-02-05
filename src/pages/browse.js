import React, { useState, useEffect } from 'react';
import { Card } from '../components'




export default function Browse() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
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
  return loading ? <section className="browse__content">hello</section> : (
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
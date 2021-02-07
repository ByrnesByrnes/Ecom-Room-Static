import React, {useState, useEffect } from 'react';

export function GetData(queries) {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  const baseUrl = 'https://fakestoreapi.com/products'

  const url = queries ? `${baseUrl}/${queries}` : baseUrl
  
  useEffect(() => {
    async function getData() {

      try {
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        if(response.status === 200) {
          setLoading(false)
          setResults(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
  
    getData()
    
  }, [])

  return [results , loading ]
};

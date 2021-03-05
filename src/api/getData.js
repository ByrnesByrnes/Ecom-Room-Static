import React, {useState, useEffect } from 'react';

export function GetData(queries) {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const baseUrl = 'https://fakestoreapi.com/products'

  const url = queries ? `${baseUrl}/${queries}` : baseUrl
  
  useEffect(() => {
    let isCancelled = false

    const getData = async () => {

      try {
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        if(response.status === 200) {
          setLoading(false)
          setResults(data)
          
        }
      } catch (error) {
        console.log(error)
        setError(error)
      }
    }
  
    getData()

    return () => {
      isCancelled = true
    }
  }, [url])

  return [results , loading, error]
};

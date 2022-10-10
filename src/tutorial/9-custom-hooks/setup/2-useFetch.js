import { useState, useEffect } from 'react';

// the 'use' keyword has to be the prefix for custom hooks. Otherwise, the compiler throws an error. THis is because useState and useEffect can only be used inside
// either a component or a custom hook(denoted by 'useName' where 'Name' can be any name).
export const useFetch = (url) => {
   const [loading, setLoading] = useState(true)
   const [products, setProducts] = useState([])

   const getProducts = async () => {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
      setLoading(false)
   }

   useEffect(() => {
      getProducts()
   }, [url])

   return {loading, products} // exporting an object which we traditionally don't do
};

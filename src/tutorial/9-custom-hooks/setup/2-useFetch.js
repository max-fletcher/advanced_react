import { useState, useEffect, useCallback } from 'react';

// the 'use' keyword has to be the prefix for custom hooks. Otherwise, the compiler throws an error. THis is because useState and useEffect can only be used inside
// either a component or a custom hook(denoted by 'useName' where 'Name' can be any name).
// export const useFetch = (url) => {
//    const [loading, setLoading] = useState(true)
//    const [products, setProducts] = useState([])

//    const getProducts = async () => {
//       const response = await fetch(url)
//       const products = await response.json()
//       setProducts(products)
//       setLoading(false)
//    }

//    useEffect(() => {
//       getProducts()
//    }, [url])

   // IMPORTANT*
   // You can just ignore the ESlint error message altogether especially if no error is thrown by terminal. Use the commented out code above for that instead
   // of the code below.

   // Sometimes, ESLint will recommend stuff that might cause problems. In this situation, it is recommending that 'getProducts' should be put inside the
   // dependency array of useEffect(since it is common convention that the states, functions and props used inside useEffect should be included inside the
   // dependency array). Plus, you can't declare the 'getProducts' outside the 'useFetch' hook since it is not a pure function(i.e it is modifying values/states)
   // that are outside of it and not inside). Hence, the only way to overcome this(especially because you HAVE to declare the states and functions
   // INSIDE OF A CUSTOM HOOK) is to wrap the 'getProducts' inside a useCallback and add 'getProducts' to the dependency array. That way, is the 
   // 

   export const useFetch = (url) => {
      const [loading, setLoading] = useState(true)
      const [products, setProducts] = useState([])
   
      const getProducts = useCallback( async () => {
            const response = await fetch(url)
            const products = await response.json()
            setProducts(products)
            setLoading(false)
         } ,[url])
   
      useEffect(() => {
         getProducts()
      }, [url, getProducts])

   return {loading, products} // exporting an object which we traditionally don't do
};

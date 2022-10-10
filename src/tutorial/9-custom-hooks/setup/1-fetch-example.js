import React, { useState, useEffect } from 'react'
// the 'use' keyword has to be the prefix for custom hooks. Otherwise, the compiler throws an error. THis is because useState and useEffect can only be used inside
// either a component or a custom hook(denoted by 'useName' where 'Name' can be any name).
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  // the 'use' keyword has to be the prefix for custom hooks. Otherwise, the compiler throws an error. THis is because useState and useEffect can only be used inside
  // either a component or a custom hook(denoted by 'useName' where 'Name' can be any name).
  const {loading, products} = useFetch(url)

  // log products. we are not doing anything with the data inside JSX since this is just for demonstration purposes. You can use the returned data as you se fit.
  console.log(products) 

  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example

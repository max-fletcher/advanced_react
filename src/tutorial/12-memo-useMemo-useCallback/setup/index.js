import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// Imagine this is a very expensive operation with a few hundred/thousand lines of code.
const calculateMostExpensive = (data) => { // this is returning the highest item price
  // To keep track of when this function is triggered. We can invoke this inside h1 tags below(works like a computed property but worse).
  // Without useMemo, it will be triggered every time anything changes(which then works like a proper computed property).
  console.log('calculateMostExpensive triggered');
  return(
    data.reduce((total, item) => {
      const price = item.fields.price
      if(price >= total){
        total = price
      }
      return total
    }, 0)/100  // round off the value calculated by 'reduce' callback to the nearest 100th
  )
}

// every time props or state changes, component re-renders

// The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized
// function.

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  // useMemo causes the calculateMostExpensive function to only be invoked when 'products'[i.e value/values inside dependency array] changes. So its
  // better to invoke this instead of calculateMostExpensive() inside the h1 below so that the component doesn't re-render every time count is changed.
  // This works like a computed property in Vue.
  const mostExpensive = useMemo(() => {
    calculateMostExpensive(products);
  }, [products])

  // Using useCallback here(with a dependency array containing 'cart' just like useEffect) to make sure that when count is changed, it doesn't
  // trigger re-render. The way it works is that when we refresh or change cart count, this function('addToCart') is built from scratch so when it was
  // passed down using prop-drilling, the components that receive it will have their props changed(re-render happens when state or props change),
  // so react is tricked into re-rendering the entire component tree(BigList and below ).By adding the useCallback with 'cart' as the dependency, we are
  // telling react to create the 'addToCart' function ONLY when the cart value is changed. The reason we are not passing an empty dependency array
  // is because if we do, the cart value will be stuck at 0. This is because it will cause this function('addToCart') to only be created on initial render.
  // It will, after that, NEVER be created again and not be found.
  const addToCart = useCallback(() => { // imagine that this adds new items to the cart
    console.log(cart);
    setCart(cart + 1)
  }, [cart])

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1>Most Expensive: ${mostExpensive}</h1>
      {/* This is just for demonstration purposes. cart is a counter nothing else */}
      <h1 style={{marginTop: '3rem'}}>Cart: {cart}</h1>
      {/* Prop-drilling addToCart into BigList component */}
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}

// Using memo will cause React to skip rendering a component if its props have not changed. Here, React.memo method wraps the BigList component
// so it doesn't re-render on count increment. It also prevents any children components(in this case, SingleProduct) from re-rendering.
// Remember, changing ANY state(or props) causes the whole component tree to re-render.
// Rule of thumb might be that when you are looping to create children component, the parent must be wrapped in React.memo to prevent unnecessary
// re-rendering. The last children don't need the React.memo since they are not going to change anyway.
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("Big List Called"); // This is to demonstrate that incrementing counter causes the BigList component to be re-rendered as well
  })
  return (
    <section className='products'>
      {products.map((product) => {
        // Prop-drilling addToCart into SingleProduct component
        return <SingleProduct key={product.id} {...product} addToCart={addToCart} />
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("Single Product Called"); // This is to demonstrate that incrementing counter causes the SingleProduct component to be re-rendered as well
  })
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      {/* Clicking add to cart will cause the cart counter to increment but also cause everything to re-render*/}
      <button onClick={addToCart}> Add To Cart </button>
    </article>
  )
}
export default Index

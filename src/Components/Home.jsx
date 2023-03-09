import React from 'react'
import ProductList from './ProductList'

const Home = (props) => {
  // console.log(props)
  return (
    <div>
        <h1>Welcome Home</h1>
        <ProductList list={props.data}/>
    </div>
  )
}

export default Home
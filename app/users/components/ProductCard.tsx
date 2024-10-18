import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => {
  return (
    <div>
     <h1>Product Card</h1>
     <div className='p-5 my-5 bg-sky-400 text-white hover:bg-sky-500 w-fit'>
     <AddToCart/> 
     </div> 
    </div>
  )
}

export default ProductCard

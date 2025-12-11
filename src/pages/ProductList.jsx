import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductList = ({items}) => {
  return (
    <div className='min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-4 gap-4 mt-16 mb-8'>
        {items.length === 0 ? (
            <p>No products available.</p>
        ) : (
            items.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))
        )}  
    </div>
  )
}

export default ProductList

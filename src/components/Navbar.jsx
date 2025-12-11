import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-950 text-white p-4 shadow-md flex justify-between items-center'>
      <div className='text-2xl font-bold'>MyStore</div>
      <div className='space-x-4'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/cart' className='hover:underline'>Cart</Link>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'
import { FcPaid } from 'react-icons/fc';

const Navbar = ({cartCount}) => {
  return (
    <div className='bg-blue-950 text-white p-4 shadow-md flex justify-between items-center fixed w-full top-0 z-10 '>
      <div className='text-2xl font-bold flex gap-2'><FcPaid className='text-3xl'/>MyStore</div>
      <div className='space-x-8'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/cart' className='hover:underline'>Cart ({cartCount})</Link>
      </div>
    </div>
  )
}

export default Navbar

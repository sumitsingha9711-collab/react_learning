import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex gap-4 bg-gray-600 items-center justify-between p-2 text-white'>
      <h2 className='text-xl font-bold px-4 py-5'>my app</h2>
      <div className='font-semibold gap-6 p-4 flex flex-row justify-between'>
        <Link to = '/'>Home</Link>
        <Link to = '/product'>Product</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar

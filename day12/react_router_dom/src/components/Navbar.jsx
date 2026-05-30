import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h2>My App</h2>
            <div className='flex gap-4 bg-gray-600 p-4 text-white'>
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    )
}

export default Navbar

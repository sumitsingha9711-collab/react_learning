import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import Nav2 from './Nav2'


const Navbar = () => {

    const [Theme] = useContext(ThemeDataContext)
    return (
        <div className={Theme}>
            <h2>my app</h2>
            <Nav2 />
        </div>
    )
}

export default Navbar

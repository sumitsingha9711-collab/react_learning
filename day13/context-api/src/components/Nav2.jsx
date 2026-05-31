import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = () => {

    const [Theme, setTheme] = useContext(ThemeDataContext)
    return (
        <div className='nav2'>
            <h4>Home </h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Settings</h4>
            <h4>{Theme}</h4>

        </div>
    )
}

export default Nav2

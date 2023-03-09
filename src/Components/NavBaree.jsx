import React from 'react'
import { Link } from 'react-router-dom'

const NavBaree = () => {
  return (
    <div>
        <ul className='nav'>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/contact">
            <li>Contact</li>
            </Link>
        </ul>
    </div>
  )
}

export default NavBaree
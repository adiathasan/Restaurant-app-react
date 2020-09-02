import React from 'react'
import { NavLink, Link } from 'react-router-dom'


function NavBar() {
    return (
        <div className='bg-dark pt-2'>
            <ul className="nav nav-tabs d-flex px-1">
                <li className="nav-item active">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item ml-auto">
                    <NavLink className="nav-link "  to="/menu/">menu</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about/">about</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact/">contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar

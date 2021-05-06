import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <header>
            <nav className="navbar">
                <Link to="/">
                <h1>SONGS LYRICS</h1>
                </Link>
            </nav>
        </header>

    )
}

export default Navbar

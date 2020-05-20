import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <a href="/">
                    <img className="main-logo" src="https://i.pinimg.com/originals/2c/fc/93/2cfc93d7665f5d7728782700e50596e3.png" />
                </a>
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/books" activeClassName="active">Books</NavLink></li>
                        <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
)

export default MainMenu
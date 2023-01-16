import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import "./Navbar.css"
export class Navbar extends Component {
    render() {
        return (
            <nav className='nav'>
                <Link to="/">Strona główna</Link>
                <Link to="/Orders">Zamówienia</Link>
                <a href='/Storage'>xdxdx</a>
            </nav>
        );
      }
}

export default Navbar
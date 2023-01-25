import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import "./Navbar.css"
export class Navbar extends Component {
    render() {
        return (
            <nav className='nav'>
                <Link style={{marginLeft:'20px'}} to="/">Zamówienia</Link>
                <Link to="/Orders">Stwórz zamówienie</Link>
                <Link to="/Item">Części w magazynie</Link>
            </nav>
        );
      }
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className="navigation">
                <div className="logo">EventEase</div>
                <div className="menu">
                    <Link to="/">Home</Link>
                    <span className='slash'>/</span>
                    {
                        <Link to="/simulator">Simulator</Link>
                    }
                    <span className='slash'>/</span>
                    <a href="https://github.com/vedant-jain03/Go-with-flow" target="_blank" rel="noopener noreferrer">Contribute</a>
                </div>
                <div className="btn">
                    {
                        <Link to="/login">Login</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
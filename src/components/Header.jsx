import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import Profile from './Profile'
import { useAuth0 } from '@auth0/auth0-react'

function Header() {
    const { isAuthenticated } = useAuth0();
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
                <div className="auth0-btns"
                style={{"display":"flex", "alignItems":"center"}}>

                { isAuthenticated ? <><Profile /><LogoutButton/></> : <LoginButton/>}
                </div>
            </div>
        </div>
    )
}

export default Header
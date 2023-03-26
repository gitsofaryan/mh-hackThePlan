import React, { useEffect, useState } from 'react'
import { BackPage } from './Homepage'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowForward } from '@material-ui/icons'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

function MyEvents() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    const handleFetch = async () => {
        try {
            const res = (await axios.get(`https://mh-hacktheplan.onrender.com/${user.email}/events`)).data;
            setEvents(res);
        } catch (e) {
            navigate('/')
            window.alert("Something went wrong!")
        }
    }
    const handleRoute = async (id) => {
        navigate(`/event/${id}`)
    }
    useEffect(() => {
        handleFetch();
    }, [])
    return (
        <div>
            <BackPage />
            <Header />
            <div className="hero" style={{ height: '250px' }}>
                <div className="h-text">
                    <h1>My Events</h1>
                    <button className='p-btn'><Link to="/event/new">Create event</Link> <ArrowForward /> </button>
                </div>
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className='evs-wrapper'>
                    {
                        events.map((item) => (
                            <div onClick={() => handleRoute(item._id)}>{item.name}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MyEvents
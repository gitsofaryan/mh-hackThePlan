import React, { useEffect, useState } from 'react'
import { BackPage } from './Homepage'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowForward } from '@material-ui/icons'
import axios from 'axios'

function MyEvents() {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    const handleFetch = async () => {
        try {
            const res = (await axios.get(`http://localhost:8000/vedantjainben10@gmail.com/events`)).data;
            setEvents(res);
            console.log(res);
        } catch (e) {
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
                    <button className='p-btn'><Link to="/event/new" target="_blank">Create event</Link> <ArrowForward /> </button>
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
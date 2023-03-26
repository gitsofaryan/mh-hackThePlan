import React, { useState } from 'react'
import { BackPage } from './Homepage'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { ArrowForward, Delete } from '@material-ui/icons'
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();


function Event() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!newTask) return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    };

    const handleTaskDelete = (index) => {
        setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
    };
    return (
        <div>
            <BackPage />
            <div className="hero" style={{ height: '250px' }}>
                <div className="h-text">
                    <h1>Event name</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, modi.</h4>
                </div>
                {/* <button className='p-btn'><Link to="/event/new" target="_blank">Create event</Link> <ArrowForward /> </button> */}
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className='ev-div' style={{ margin: '30px' }}><hr /></div>
                <div className='ev-div'>
                    <h3 style={{ margin: '10px 0' }}>Invitation[Visible to organizer only]</h3>
                    <span>Invite your guest by entering there whatsapp number[, ]. We have created a special invite message for them. Preview here</span>
                    <input type="text" style={{ width: '100%', margin: '10px 0' }} />
                </div>
                <div className='ev-div'>
                    <h3 style={{ margin: '10px 0' }}>Party Playlist</h3>
                    <span>A crowd-sourced party playlist. If you wanted to add a song you love, type and click the "Add" button[This section is public]</span>
                    <form className="song_wrapper" style={{ display: 'flex', alignItems: 'center' }} onSubmit={handleFormSubmit}>
                        <input type="text" style={{ width: '90%', margin: '10px 0' }} value={newTask} onChange={handleInputChange} />
                        <button type='submit' className='p-btn' style={{ width: '30px', height: '40px', marginLeft: '10px' }}>Add</button>
                    </form>

                    <div className="song-list">
                        {tasks.map((task, index) => (
                            <span className='song'>{task} | Vedant Jain <Delete style={{ cursor: 'pointer' }} onClick={() => handleTaskDelete(index)} /></span>
                        ))}
                    </div>
                </div>
                <button className="p-btn step1btn" style={{ marginTop: '2rem' }}>Save <ArrowForward /></button>
            </div>
        </div>
    )
}

export default Event
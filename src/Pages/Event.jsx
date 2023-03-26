import React, { useEffect, useState } from 'react'
import { BackPage } from './Homepage'
import Header from '../components/Header'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowForward, Delete } from '@material-ui/icons'
import SpotifyWebApi from "spotify-web-api-js";
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

const spotifyApi = new SpotifyWebApi();


function Event() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [timing, setTiming] = useState("");
    const { user } = useAuth0();

    const navigator = useNavigate();
    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!newTask) return;
        setTasks([...tasks, `${newTask}`]);
        setNewTask("");
    };

    const handleTaskDelete = (index) => {
        setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
    };
    const { id } = useParams();
    const fetchEvent = async () => {
        try {
            const res = (await axios.get(`https://mh-hacktheplan.onrender.com/event/${id}`)).data;
            console.log(res);
            setName(res.name);
            setDesc(res.desc);
            setTiming(res.time)
            setTasks(res.playlist)
        } catch (e) {
            window.alert("Something went wrong");
        }
    }
    const handleUpdate = async () => {
        try {
            const res = await axios.patch(`https://mh-hacktheplan.onrender.com/event/${id}`, {
                playlist: tasks
            });
            if (res.status === 201) {
                window.alert("Playlist updated successfully!")
            }
            fetchEvent();
        } catch (e) {
            window.alert("Something went wrong");
        }
    }
    useEffect(() => {
        fetchEvent();
    }, [])
    return (
        <div>
            <BackPage />
            <div className="hero" style={{ height: '250px' }}>
                <div className="h-text">
                    <h1>{name}</h1>
                    <h4>{desc}</h4>
                    <h4>Timing: {timing}</h4>
                    <h6>Link: <a href={window.location.href} target='_blank'>{window.location.href}</a></h6>
                </div>
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className='ev-div' style={{ margin: '30px' }}><hr /></div>
                <div className='ev-div'>
                    <h3 style={{ margin: '10px 0' }}>Party Playlist</h3>
                    <span>A crowd-sourced party playlist. If you wanted to add a song you love, type and click the "Add" button[This section is public]</span>
                    <form className="song_wrapper" style={{ display: 'flex', alignItems: 'center' }} onSubmit={handleFormSubmit}>
                        <input type="text" style={{ width: '90%', margin: '10px 0' }} value={newTask} onChange={handleInputChange} />
                        <button type='submit' className='p-btn' style={{ width: '30px', height: '40px', marginLeft: '10px' }}>Add</button>
                    </form>

                    <div className="song-list">
                        {tasks.map((task, index) => (
                            <span className='song'>{task}<Delete style={{ cursor: 'pointer' }} onClick={() => handleTaskDelete(index)} /></span>
                        ))}
                    </div>
                </div>
                <button className="p-btn step1btn" style={{ marginTop: '2rem' }} onClick={() => handleUpdate()}>Save <ArrowForward /></button>
            </div>
        </div>
    )
}

export default Event
import React, { useState } from 'react'
import { BackPage } from './Homepage'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import axios from 'axios'

function CgItem({ text }) {
    const [select, setSelect] = useState(false);
    return (
        <div className={(select) ? 'select cg-item' : 'cg-item'} onClick={() => setSelect(!select)} >{text}</div>
    )
}

function CreateEvent() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [timing, setTiming] = useState("");
    const handleSubmit = async () => {
        console.log(process.env.REACT_APP_BACKEND);
        try {
            const res = (await axios.post(`http://localhost:8000/event`, {
                email: "vedantjainben10@gmail.com",
                name: name,
                desc: desc,
                time: timing
            })).data;
            navigate(`/event/${res._id}`)
        } catch (e) {
            window.alert("Something went wrong");
        }
    }
    return (
        <div id='formPage'>
            <BackPage />
            <Header />
            <div className="hero" style={{ height: '250px' }}>
                <div className="h-text">
                    <h1>EventEase</h1>
                    <h4>Create event</h4>
                </div>
            </div>
            {
                (
                    <div className="form">
                        <div className="ip-wrapper">
                            <h4>Event Name</h4>
                            <input type="text" placeholder='enter event name, e.g. Diwali' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="ip-wrapper">
                            <h4>Event Description</h4>
                            <input type="text" placeholder='enter tagline for event' value={desc} onChange={(e) => setDesc(e.target.value)} />
                        </div>
                        <div className="ip-wrapper">
                            <h4>Event Timing</h4>
                            <input type="text" placeholder='enter timing of the event' value={timing} onChange={(e) => setTiming(e.target.value)} />
                        </div>
                        <button className="p-btn step1btn" onClick={() => handleSubmit()}>Create <ArrowForward /></button>
                    </div>
                )
            }
        </div>
    )
}

export default CreateEvent
import React, { useState } from 'react'
import { BackPage } from './Homepage'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

function CgItem({ text }) {
    const [select, setSelect] = useState(false);
    return (
        <div className={(select) ? 'select cg-item' : 'cg-item'} onClick={() => setSelect(!select)} >{text}</div>
    )
}

function CreateEvent() {
    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [timing, setTiming] = useState("");

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
                            <input type="text" placeholder='enter event name, e.g. Diwali' />
                        </div>
                        <div className="ip-wrapper">
                            <h4>Event Description</h4>
                            <input type="text" placeholder='enter tagline for event' />
                        </div>
                        <div className="ip-wrapper">
                            <h4>Event Timing</h4>
                            <input type="text" placeholder='enter timing of the event'/>
                        </div>
                        {/* <div className="ip-wrapper-w">
                            <h4>Choose Games and Activities</h4>
                            <div className='choice_ga-lists'>
                                <CgItem text="PS5" />
                                <CgItem text="PS5" />
                                <CgItem text="PS5" />
                                <CgItem text="PS5" />
                                <CgItem text="PS5" />
                            </div>
                        </div> */}
                        <button className="p-btn step1btn" onClick={() => setStep(2)}>Create <ArrowForward /></button>
                    </div>
                )
            }
        </div>
    )
}

export default CreateEvent
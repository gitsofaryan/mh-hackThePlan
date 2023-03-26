import React from 'react'
import container_bg from "../images/container_bg.png"
import bg_line from "../images/bg_line.png"
import demo_app_img from '../images/app_demo_img.png'
import demo_app_im2 from '../images/app_demo_img2.png'
import { LinkedIn, Twitter, GitHub, Email, ArrowForward } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export function BackPage() {
    return (
        <div className='container'>
            <img src={container_bg} alt="" className='container_pg_img' />
            <div className="light_top"></div>
            <img src={bg_line} alt="" className="bg_line" />
        </div>
    )
}

function Homepage() {
    return (
        <div className='homepage'>
            <BackPage />
            <Header />
            <div className="hero">
                <div className="h-text">
                    <h1>EventEase</h1>
                    <h4>Go with Flow is a platform that allows users to make Algorithm’s flowchart online using Simulator. The users can create many projects and can download them in form of images.</h4>
                </div>
                <button className='p-btn'><Link to="/event/new">Create event</Link> <ArrowForward /> </button>
            </div>
            <h1 className='heading'>Features</h1>
            <div className="app_demo">
                <div className="ap-wrapper">
                    <div className="aw-header">
                        <h1>Simulator</h1>
                        <h4>This is a demo flowchart for checking weather a number is even or odd.</h4>
                    </div>
                    <div>
                        <img src={demo_app_img} alt="" className='demo_app_img' />
                    </div>
                </div>
            </div>
            <div className="app_demo">
                <div className="ap-wrapper">
                    <div className="aw-header">
                        <h1>Dashboard</h1>
                        <h4>Create as many project you want to in the dashboard.</h4>
                    </div>
                    <div>
                        <img src={demo_app_im2} alt="" className='demo_app_img' />
                    </div>
                </div>
            </div>
            <div className="app_demo">
                <div className="ap-wrapper">
                    <div className="aw-header">
                        <h1>Technology Used</h1>
                    </div>
                    <div className='ts_wrapper'>
                        <div className='tech_stack'>Typescript</div>
                        <div className='tech_stack'>React</div>
                        <div className='tech_stack'>Node.js</div>
                        <div className='tech_stack'>Express.js</div>
                        <div className='tech_stack'>MongoDB</div>
                        <div className='tech_stack'>Javascript</div>
                        <div className='tech_stack'>react-flow-renderer</div>
                    </div>
                </div>
            </div>
            <div className="app_demo">
                <div className="ap-wrapper" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div className="aw-header">
                        <h1>Connect with me</h1>
                    </div>
                    <div className='ts_wrapper'>
                        <div className="p-btn">GitHub  <GitHub /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
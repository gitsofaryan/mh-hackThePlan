import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import './App.css'
import CreateEvent from './Pages/CreateEvent';
import Event from './Pages/Event';
import MyEvents from './Pages/MyEvents';

function App() {
  return (
    <div>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/event/new' element={<CreateEvent />} />
          <Route exact path='/event/:id' element={<Event />} />
          <Route exact path='/events' element={<MyEvents />} />
        </Routes>
    </div>
  )
}

export default App
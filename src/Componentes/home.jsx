import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prin from '../App';
const home = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/prin" element={<Prin />} />
      </Routes>
    </Router>
  )
}

export default home

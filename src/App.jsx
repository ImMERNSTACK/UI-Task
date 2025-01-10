import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Services from './pages/Services';
import Home from './pages/Home';

function App() {
  return (
    <div className="font-roboto">
      
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Services/>} />
        </Routes>
      
    </div>
  )
}

export default App;
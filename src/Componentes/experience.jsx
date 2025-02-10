import React from 'react'
import Nav from './navbar';
import video from '../assets/video7.mp4';
import avion from '../assets/avion.png';
import '../Componentes/experience.css';
const experience = () => {
  return (

    <div className="app-container">
      <video autoPlay loop muted className="background-video"><source src={video} type="video/mp4" /></video>
      <Nav />
      

        <div class="xd row">
          <div class="col-12 d-flex justify-content-end mt-5">
            <h1 className='text21 text-black '>WEGLON EXPERIENCE</h1>
          </div>
          <div class="col-12 ">
          <h1 className='textt1 text-black mt-5'>TRANSCENDING BORDERS</h1>
          <h1 className='textt12 text-black mt-3'>EMBRACING THE WORLD</h1>
          </div >

          

        

        </div>

      
    </div>

  )
}

export default experience
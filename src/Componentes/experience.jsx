import React from 'react'
import Nav from './navbar';
import video from '../assets/video7.mp4';
import avion2 from '../assets/bannerr.png';
import '../Componentes/experience.css';
import Footer from './Footer';
import CarrInf from './carruselInf';
import { Link } from "react-router-dom";
const experience = () => {
  return (

    <div className="app-container">
      <video autoPlay loop muted className="background-video"><source src={video} type="video/mp4" /></video>
      <Nav />

      <div className="container-fluid p-0">
      
        <div className="row position-relative">
          {/* Contenedor de imagen */}
          <h1 className='textoBan1 me-3 text-end text-black mt-5'>WEGLON EXPERIENCE</h1>
          <div className="col-12 p-0">
            <img src={avion2} className="img-fluid banner-img" alt="Fondo" />
          </div>


          {/* Texto sobre la imagen */}
          <div className="col-8 position-absolute top-50 start-0 translate-middle-y ms-5  ">
            <h1 className="textoBan11 fw-bold text-black  ">TRANSCENDING BORDERS</h1>
            <h2 className="textoBan22 fw-bold text-black"> EMBRACING THE WORLD
            </h2>
            {/* <p className='textoBan3 text-black'>At Weglon, we believe that language learning goes beyond the classroom. <br />
              Our mission is to connect students with the world through immersive experiences <br />
              that combine academic learning with real culture.</p> */}
          </div>
        </div>
      </div>
      <CarrInf/>
      <Footer/>

    </div>

  )
}

export default experience
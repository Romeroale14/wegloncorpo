
import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player";

import { useRef } from "react";

import Nav from './navbar';
import video from '../assets/video7.mp4';
import avion2 from '../assets/bannerr.png';
import '../Componentes/experience.css';
import Footer from './Footer';
import CarrInf from './carruselInf';
import videoCert from '../assets/redes/Download.mp4';
import { Link } from "react-router-dom";
import videocard from '../assets/testimonios/0220 (1).mp4';


const Experience = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  
  // 🔹 Función para reproducir el video al pasar el cursor
  const handleMouseEnter = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current
        .play()
        .catch(error => console.log("Error al reproducir:", error));
    }
  };

  // 🔹 Función para pausar el video al quitar el cursor
  const handleMouseLeave = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  };

  // 🔹 Función para mutear o desmutear el video sin afectar la reproducción
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // 🔹 useEffect para asegurar que el video se prepara correctamente
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.preload = "auto";
    }
  }, []);


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
          </div>
        </div>
      </div>

      {/* ---------------------------------------TESTIMONIOOOOOS--------------------------------------------------------------- */}
      <div className="container mt-4">
        {/* Primera fila */}
        <h1 className="textoBan22 fw-bold text-black text-center">TESTIMONIALS</h1>

        <div className="row g-4 justify-content-center mt-5">

          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <p className='m-5'>My experience on the educational trip to London was truly
                transformative.
                Not only did I improve my
                English skills.</p>
              <h6 className='m-4'>Participant: Alexis Romero <br />
                Destination: London, England <br />
                Date: July 2024</h6>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <p className='m-5'>My experience on the educational trip to London was truly
                transformative.
                Not only did I improve my
                English skills.</p>
              <h6 className='m-4'>Participant: María López <br />
                Destination: Tokio, Japan <br />
                Date: July 2024</h6>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <p className='m-5'>My experience on the educational trip to London was truly
                transformative.
                Not only did I improve my
                English skills.</p>
              <h6 className='m-4'>Participant: Jessica Garcia <br />
                Destination: Houston,Texas <br />
                Date: July 2024</h6>
            </div>
          </div>

        </div>
      </div>

      {/* ----------------------------------------CARD TESTIMONIOS------------------------------------------------------------ */}
      <div className="container mt-5 ">
        <div className="row g-4 justify-content-center">

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <video className="card-img-top" autoPlay loop muted playsInline>
                <source src={videocard} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body">
                <h5 className="card-title">NASA</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <video className="card-img-top" autoPlay loop muted playsInline>
                <source src={videocard} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body">
                <h5 className="card-title">NASA</h5>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <video className="card-img-top" autoPlay loop muted playsInline>
                <source src={videocard} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body">
                <h5 className="card-title">NASA</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <video className="card-img-top" autoPlay loop muted playsInline>
                <source src={videocard} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body">
                <h5 className="card-title">NASA</h5>
              </div>
            </div>
          </div>


        </div>
      </div>


      


      <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
      <div className="card" style={{ width: "17rem" }}>
        <div
          className="position-relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            className="card-img-top"
            src={videoCert}
            muted={isMuted}
            loop
            playsInline
            preload="auto"
          ></video>
          {/* 🔹 Botón para mutear o desmutear */}
          <button
            className="btn btn-secondary position-absolute top-0 start-0 m-2"
            onClick={toggleMute}
          >
            {isMuted ? "🔇 Unmute" : "🔊 Mute"}
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">NASA</h5>
        </div>
      </div>
    </div>
      {/* ----------------------------------CARRUSEL INFINITO------------------------------------------------------- */}
      <CarrInf />

      {/* -------------------------------------FOOTER------------------------------------------ */}
      <Footer />

    </div>

  )
}

export default Experience
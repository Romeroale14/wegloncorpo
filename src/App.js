//librerias
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import useContentful from './useContentful';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ClipLoader } from 'react-spinners';
import { Link } from "react-router-dom";

//media
import video from './assets/video7.mp4';
import avion2 from './assets/banner.png';
import CardExpjapon from './assets/cardsExp/JAP.png';
import ban1 from './assets/banner1.png';
import CardExpNasa from '../src/assets/cardsExp/NASA1.png';
import videoCert from './assets/redes/videounido.mp4';
import cardExpcanada from './assets/cardsExp/CANADA.png';
import cardExpengland from './assets/cardsExp/england.png';
import ban2 from './assets/BANNER2.png'
import cardAle from './assets/cardsCert/alemania card.png';
import cardIngles from './assets/cardsCert/card england.png';
import cardEspa from './assets/cardsCert/card ESPAÑOL.png';
import cardItalia from './assets/cardsCert/card ITALIA.png';
import cardChina from './assets/cardsCert/certificadochino.png';
import cardFran from './assets/cardsCert/card FRANCIA.png';

//componentes
import Nav from './Componentes/navbar';
import Footer from './Componentes/Footer';
import CarrInf from './Componentes/carruselInf';


function App() {

  const [authors, setAuthors] = useState([]);
  const { getAuthors } = useContentful(); // Función para obtener autores desde Contentful
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Manejo de errores
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

  // Hook de efecto para cargar datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Inicia el estado de carga
        const response = await getAuthors(); // Obtiene autores desde Contentful
        setAuthors(response || []); // Asigna los datos al estado, o un arreglo vacío si la respuesta es nula
      } catch (err) {
        setError('Error al cargar los autores'); // Maneja errores
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    // Evita volver a cargar los datos si ya se han obtenido
    if (authors.length === 0) {
      fetchData();
    }
  }, [getAuthors, authors.length]); // Dependencias: solo ejecuta el efecto cuando cambien

  // Muestra el indicador de carga si `loading` es verdadero
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <ClipLoader color="#007bff" loading={loading} size={75} />
      </div>
    );
  }

  // Muestra el mensaje de error si hay algún problema
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <span>{error}</span>
      </div>
    );
  }

  // Contenido principal
  return (
    <div className="app-container">
      <video autoPlay loop muted className="background-video"><source src={video} type="video/mp4" /></video>
      {/* -------------------------------NAVGEADOR------------------------------------ */}
      <Nav />
      {/* ---------------banner-------------------------------------------- */}

      <div className="container-fluid mt-5  p-0">
        <div className="row position-relative">
          {/* Contenedor de imagen */}
          <div className="col-12 p-0">
            <img src={avion2} className="img-fluid banner-img" alt="Fondo" />
          </div>
          {/* <div className='posicionlogo'>{authors.length > 0 &&
            authors.map((author, index) => (
              <img src={author.ItaliaCarr1} className='navimg2' alt="Chino" />))}
          </div> */}

          {/* Texto sobre la imagen */}
          <div className="col-8 position-absolute top-50 start-0 translate-middle-y ms-5  ">
            <h1 className="textoBan1 fw-bold text-black  ">EXPLORE THE WORLD ALEXIS</h1>
            <h2 className="textoBan2 fw-bold text-black"> MASTER LANGUAGES</h2>
            <p className='textoBan3 text-black'>At Weglon, we believe that language learning goes beyond the classroom. <br />
              Our mission is to connect students with the world through immersive experiences <br />
              that combine academic learning with real culture.</p>
          </div>
        </div>
      </div>


      {/* ----------------------CARRUSEL--------------------------- */}
      <div id="carouselExampleControls" className="carrus carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ban1} className="d-block w-100 h-100 img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ban2} className="d-block w-100 h-100 img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ban1} className="d-block w-100 h-100 img-fluid" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ----------------------EXPERIENCE--------------------------- */}
      <div className='experience2 col d-flex flex-column'>
        <Link className="text-decoration-none" to="/about"><h1 className=' me-3 text-end text-black'>WEGLON EXPERIENCE</h1></Link>
        <h6 className='me-3 text-end text-black'>EDUCATIONAL</h6>
        <h6 className='me-3 text-end text-black'>PROGRAMS</h6>
      </div>

      {/* ---------------------- CARTAS EXPERIENCIAS-------------------------- */}
      <div className="containerr mt-4 ">
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <img src={CardExpjapon} className="card-img-top" alt="Japan" />
              <div className="card-body">
                <h5 className="card-title">JAPAN</h5>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <img src={CardExpNasa} className="card-img-top" alt="NASA" />
              <div className="card-body">
                <h5 className="card-title">NASA</h5>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <img src={cardExpcanada} className="card-img-top" alt="Canadian" />
              <div className="card-body">
                <h5 className="card-title">CANADIAN</h5>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <img src={cardExpengland} className="card-img-top" alt="London" />
              <div className="card-body">
                <h5 className="card-title">LONDON</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------VIDEO EXPERIENCE--------------------------- */}
      <div
        className="video-containerr position-relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          className="video-element"
          src={videoCert}
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          style={{ width: "100%", borderRadius: "10px" }} // Ajuste visual opcional
        />
        <button
          className="btn btn-secondary position-absolute top-0 start-0 m-2"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* -----------------------LETRAS CERTIFICATION------------------------------------- */}
      <div className='experience col d-flex flex-column'>
        <a href="" className="text-decoration-none">
          <h1 className=' ms-3 text-start text-black'>WEGLON CERTIFICATION</h1></a>
        <h6 className='ms-4 text-start text-black'>EDUCATIONAL</h6>
        <h6 className='ms-4 text-start text-black'>PROGRAMS</h6>
      </div>

      {/* ---------------------------CARTAS CERTIFICATION-------------------------------------- */}
      <div className="containerr mt-4">
        {/* Primera fila */}
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <img src={cardAle} className="card-img-top" alt="Japan" />
              <div className="card-body">
                <h5 className="card-title">GERMAN</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <img src={cardIngles} className="card-img-top" alt="NASA" />
              <div className="card-body">
                <h5 className="card-title">ENGLISH</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <img src={cardEspa} className="card-img-top" alt="Canadian" />
              <div className="card-body">
                <h5 className="card-title">SPANISH</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda fila */}
        <div className="row g-4 justify-content-center mt-5">
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <img src={cardItalia} className="card-img-top" alt="Japan" />
              <div className="card-body">
                <h5 className="card-title">ITALIAN</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <img src={cardChina} className="card-img-top" alt="NASA" />
              <div className="card-body">
                <h5 className="card-title">CHINESE</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="card" style={{ width: '17rem' }}>
              <img src={cardFran} className="card-img-top" alt="Canadian" />
              <div className="card-body">
                <h5 className="card-title">FRENCH</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------VIDEO CERITIFICATION--------------------------------- */}
      <div
        className="video-containerr position-relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          className="video-element"
          src={videoCert}
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          style={{ width: "100%", borderRadius: "10px" }} // Ajuste visual opcional
        />
        <button
          className="btn btn-secondary position-absolute top-0 start-0 m-2"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* ------------------------------CARRUESEL INFINITO---------------------------------------- */}
      <CarrInf />

      {/* ----------------------------------------FOOTER----------------------------- */}
      <Footer />

    </div>
  );
}

export default App;

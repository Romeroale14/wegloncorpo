
import React, { useState, useEffect } from 'react';
import './App.css';
import ReactPlayer from 'react-player';
import useContentful from './useContentful';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ClipLoader } from 'react-spinners';
import video from './assets/video7.mp4';
import weglon1 from './assets/weglon anterior.png';
import weglon2 from './assets/weglon.png';
import avion from './assets/avion.png';
import japon from './assets/JAP.png';
import ban1 from './assets/banner1.png';
import Nasa from '../src/assets/NASA1.png';
import { Link } from "react-router-dom";
import videxp from './assets/redes/videounido.mp4';
import Nav from './Componentes/navbar';
import Footer from './Componentes/Footer';
import canada from './assets/CANADA.png';
import england from './assets/england.png';
function App() {
  // Estado para controlar el mute del video
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = () => {
    setIsMuted(false); // Desactiva el mute al pasar el cursor
  };

  const handleMouseLeave = () => {
    setIsMuted(true); // Activa el mute al quitar el cursor
  };

  //menu desplegable
  const [isOpen, setIsOpen] = useState(false);
  // Estado para manejar la lista de autores
  const [authors, setAuthors] = useState([]);
  const { getAuthors } = useContentful(); // Función para obtener autores desde Contentful
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Manejo de errores

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
      <div className='banner  ms-4'>
        <div class="containerr ">
          <div class="row">
            <div class=" col-8">
              <h1 className='text2 text-black'>EXPLORE THE WORLD</h1>
              <h4 className='textt text-black '>MASTER LANGUAGES</h4>
              <br />
              <br />
              <h5 className='text-black m-0 p-1 lh-sm fw-light'>At Weglon, we believe that language learning goes beyond the classroom.<br /> 
              Our mission is to connect students with the world through immersive experiences that combine academic learning with real culture.</h5>
            </div>

            <div class="col d-flex justify-content-end ">
              <img src={avion} alt="LOGO" className="logo3" />
            </div>

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
            <img src={ban1} className="d-block w-100 h-100 img-fluid" alt="..." />
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
        <a href="" class="text-decoration-none">
          <h1 className='mt-5 me-3 text-end text-black'>WEGLON EXPERIENCE</h1></a>
        <h6 className='me-3 text-end text-black'>EDUCATIONAL</h6>
        <h6 className='me-3 text-end text-black'>PROGRAMS</h6>
      </div>
      {/* ---------------------- CARTAS EXPERIENCIAS-------------------------- */}
      <div class="cartas">
        <div class="row">
          <div class="col">
            <div className="card mt-2 " style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={japon} className="card-img-top" alt="..." />
              <div className="card-body ">
                <h5 className="card-title">JAPAN</h5>
                {/* <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card mt-2" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={Nasa} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">NASA</h5>
                {/* <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card mt-2" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={canada} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title ">CANADIAN</h5>
                {/* <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card mt-2" style={{ marginLeft: '10px', width: '17rem' }}>
              <img src={england} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LONDON</h5>
                {/* <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------VIDEO EXPERIENCE--------------------------- */}
      <div
        className="video-containerr"
        onMouseEnter={handleMouseEnter} // Activa audio al pasar el cursor
        onMouseLeave={handleMouseLeave} // Silencia al quitar el cursor
      >
        <ReactPlayer
          url={videxp}
          playing={true} // Reproduce el video automáticamente
          controls={false} // Oculta los controles
          width="100%" // Ancho al 100% del contenedor
          height="110%" // Alto al 100% del contenedor
          muted={isMuted} // Controla el mute basado en el estado
          loop={true} // Opcional: hace que el video se repita cuando termine
          playsinline={true} // Reproduce el video en línea (sin pantalla completa)
        />
      </div>
      {/* -----------------------LETRAS CERTIFICATION------------------------------------- */}
      <div className='experience col d-flex flex-column '>
        <a href="" class="text-decoration-none">
          <h1 className='mt-5 ms-3 text-start text-black'>WEGLON CERTIFICATION</h1></a>
        <h6 className='ms-4 text-start text-black'>EDUCATIONAL</h6>
        <h6 className='ms-4 text-start text-black'>PROGRAMS</h6>
      </div>
      {/* ---------------------------CARTAS CERTIFICATION-------------------------------------- */}
      <div class="cartas">
        <div class="row">
          <div class="col">
            <div className="card mt-2" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">JAPAN</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card mt-2" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHhxOXU2eGt0dXM2b25jZmR3dmhtcmF2ZGRxYjhobzExYzRpanRkMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dVnzGW7UehcEpwLxBm/giphy.gif" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">NASA</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div class="col">
            <div className="card bg-transparent border-0 mt-2" style={{ marginLeft: '15px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-white">CANADIAN</h5>
                <p className="card-text text-white">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card mt-2" style={{ marginLeft: '10px', width: '17rem' }}>
              <img src={avion} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LONDON</h5>
                <p className="card-text">Some quick example text to build on the card </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------VIDEO CERITIFICATION--------------------------------- */}
      <div className="videocer video-containerr">
        <video width="640" height="360" controls>
          <source src="https://www.youtube.com/watch?v=ag7Vj3f7yMk" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* ------------------------------CARRUESEL INFINITO---------------------------------------- */}
      <div class="scrolll ">
        <div className='mb-5'>
          <img src={avion} alt="" className='imgcarru' />
          <img src={weglon1} alt="" className='imgcarru' />
          <img src={weglon2} alt="" className='imgcarru' />
          <img src={avion} alt="" className='imgcarru' />
          <img src={weglon1} alt="" className='imgcarru' />
          <img src={weglon2} alt="" className='imgcarru' />
          <img src={avion} alt="" className='imgcarru' />
          <img src={weglon1} alt="" className='imgcarru' />
          <img src={weglon2} alt="" className='imgcarru' />

        </div>
      </div>

      {/* ----------------------------------------FOOTER----------------------------- */}
      <Footer />
    </div>
  );
}

export default App;

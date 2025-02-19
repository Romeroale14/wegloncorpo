import React from 'react'
import weglon2 from '../assets/weglon.png';
import ubi from '../assets/redes/ubi.png';
import face from '../assets/redes/facebook_4494464.png';
import insta from '../assets/redes/instagram_4494468.png';
import tik from '../assets/redes/tiktok_3116491.png';
import you from '../assets/redes/video_6932560.png';
import tel from '../assets/redes/llamada-telefonica.png';
import msg from '../assets/redes/correo.png';
const Footer = () => {
  return (
    <div className="xdxd container  mb-5 ">
    <div className="row">
      <div className="bg-dark col-4 text-white d-flex align-items-center">
        <img src={weglon2} alt="LOGO" className="logo2 me-2 mt-3" />
        <h4 className="letras mt-3 ms-3">WEGLON</h4>
      </div>
      <div className="bg-dark col-4 text-white d-flex align-items-center">
        <h4 className="letras mt-3 ">UBICACION</h4>
      </div>
      <div className="bg-dark col-4 text-white d-flex align-items-center">
        <h6 className="letras mt-3">FOLLOW</h6>
      </div>
    </div>
    {/* ------------------------PARTE 2 DEL FOOTER----------------------------- */}
    <div className="row">
      <div className="bg-dark col-4 text-white d-flex align-items-center">
        <p className='letras2 mt-5'>En WEGLON contamos con un equipo profesional y capacitado para hacer de tu viaje
          y de tu proceso de certificación una experiencia inolvidable.
          Contamos con un equipo de asesores expertos en educación internacional.
          Estamos comprometidos con la formación de líderes a nivel mundial para el desarrollo
          de nuestro país, introduciendo la cultura de otros países, fomentando el liderazgo
          y el trabajo en equipo mediante una perspectiva global.</p>
      </div>
      <div className="bg-dark col-4 text-white d-flex ">
        <img src={ubi} alt="LOGO" className="logo5 mt-3 " />

        <h4 className="letras21 mt-5"><a href=""></a>San Gaspar 20B <br />
          Fraccionamiento Pedregal de las Fuentes <br />
          Jiutepec Morelos <br />
          C.P. 62554, México</h4>
      </div>
      <div className="col-4 bg-dark text-white d-flex flex-wrap justify-content-around">
        <div className="col zoom-container">
          <a href="https://www.facebook.com/weglonoficialmx/"><img src={face} alt="LOGO" className="logo5 mt-3 zoom-image" /></a>
        </div>
        <div className="col zoom-container">
          <a href="https://www.instagram.com/weglon.oficial?igsh=eXB4M3JwOTBlcjNh"><img src={insta} alt="LOGO" className="logo5 mt-3 zoom-image" /></a>
        </div>
        <div className="col zoom-container">
          <a href="https://www.tiktok.com/@weglon.oficial?lang=es"><img src={tik} alt="LOGO" className="logo5 mt-3 zoom-image" /></a>
        </div>
        <div className="col zoom-container">
          <a href="https://www.youtube.com/@worldwideeducation4885"><img src={you} alt="LOGO" className="logo5 mt-3 zoom-image" /></a>
        </div>
      </div>

    </div>
    {/* ------------------------PARTE 3 DEL FOOTER----------------------------- */}
    <div className="row">
      <div className="bg-dark text-white d-flex flex-wrap col-4">
        <h6 className="letras mt-3 ms-0 col-12 col-md-6 text-center text-md-start">CONDICIONES DE USO</h6>
        <h6 className="letras mt-3 ms-0 col-12 col-md-6 text-center text-md-start">DECLARACIONES DE PRIVACIDAD</h6>
      </div>

      <div className="bg-dark col-4 text-white d-flex flex-column ">
        <h6 className="letras mt-3 ms-0 ">CONTAC</h6>
        <div className="mt-2 mb-5">
          <img src={tel} alt="LOGO" className="logo5 mt-2" /> +52 (777) 323 3890 <br />
          <img src={msg} alt="LOGO" className="logo5 mt-2" />  wegn2013@gmail.com
        </div>
      </div>

      <div className="bg-dark col-4 text-white d-flex align-items-center"></div>
    </div>


  </div>

  )
}

export default Footer

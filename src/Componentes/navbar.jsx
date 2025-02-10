import weglon2 from '../assets/weglon.png';
import weglon1 from '../assets/weglon anterior.png';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    //menu desplegable
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="containerr text-center">
            <div className="row">
                <div className="xd col d-flex align-items-center ms-3 zoom-container">
                <Link to="/" className=""> <img src={weglon1} alt="LOGO" className="logo2 zoom-image" />  </Link>
                </div>

                <div className="xd col d-flex justify-content-center align-items-center">
                    <ul className="lista list-unstyled d-flex justify-content-between">
                        <li className="mx-3">
                            <li className="nav-item dropdown position-relative">
                                {/* Botón para abrir/cerrar el menú */}
                                <a className="menux nav-link active text-black" onClick={() => setIsOpen(!isOpen)}>OUR SERVICES</a>

                                {/* Menú desplegable */}
                                {isOpen && (
                                    <div className="dropdown-menu show position-absolute">
                                        <Link to="/about" className="dropdown-item">
                                            Weglon experince
                                        </Link>
                                        <Link to="/another-action" className="dropdown-item">
                                            Weglon certificartion
                                        </Link>
                                    </div>
                                )}
                            </li>
                        </li>
                        <li className="mx-3">
                            <a className="menux nav-link active text-black" aria-current="page" href="#">ABOUT</a>
                        </li>
                        <li className="mx-3">
                            <Link className="menux nav-link active text-black" to="/about">CONTACTO</Link>
                        </li>
                    </ul>
                </div>

                <div className="xd col d-flex justify-content-end align-items-center me-3 mt-3 zoom-container">
                    <Link to="/" className=""> <img src={weglon2} alt="LOGO" className="logo2 zoom-image" />  </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;

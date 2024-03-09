import React from 'react';
import { Link } from 'react-router-dom';
import delivery from '../assets/delivery.jpg';


function Navbar(){

    const navbarStyle = {
        fontFamily: 'ui-serif, Arial, sans-serif', // Use a web-safe font or your preferred font
      };

      const logoStyle = {
        borderRadius: '50%', // Make the logo round
      };


    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark" style={navbarStyle}>
            <div className="container-fluid bg-dark">
                <a className="navbar-brand" href="#">
                    <img src={delivery} alt="Logo" width="30" height="24" className="d-inline-block align-text-top rounded-circle me-3" style={logoStyle}/>
                    <b>OrderMenia</b>
                </a>
                <button
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-bs-target="#navbarTogglerDemo02"
                    data-bs-toggle="collapse"
                    type="button"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a aria-current="page" className="nav-link active" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Order
                            </a>
                        </li>
                    </ul>
                        <a href='/login'>
                        <button className="btn btn-outline-primary me-2" type="button">
                            Login
                        </button>
                        </a>


                        <a href='/signup'>
                        <button className="btn btn-outline-secondary" type="button">
                            Signup
                        </button>
                        </a>
                        

                </div>
            </div>
        </nav>

        </>
    )
}

export default Navbar;
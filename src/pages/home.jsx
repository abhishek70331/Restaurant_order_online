import React, { Component } from "react";
import Food from '../assets/online.jpeg'
import SearchBar from "../components/search";
import { Link } from "react-router-dom"


function Home(){

    return(
        <>
            <div className="container-fluid">
            <div className="container-fluid d-flex bg-image" style={{backgroundImage: `url(${Food})`,opacity: 0.8, minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <header className="text-center text-dark position-absolute top-30 start-50 translate-middle-x">
                    <div className="display-3 mx-auto"><b>Order Food Restaurant</b></div>
                    <p className="lead mx-auto"><b>Experience the next level technology</b></p>
                </header>
                <div className="position-absolute top-50 start-50 translate-middle">
                        <SearchBar />
                    </div>

            </div>
            </div>
            


        </>
    )
}

export default Home;


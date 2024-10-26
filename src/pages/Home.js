import React, { Component } from "react";
import { Link } from 'react-router-dom';
import HomeFeatures from "../components/HomeFeatures";
import HomeBranding from "../components/HomeBranding"

import hero_img from "../assets/img/hero.jpeg"
import "../css/home.scss";

class Home extends Component
{
    render() {
        return (
            <>
            <section id="hero-image-wrapper">
                <img src={hero_img} id="hero-img" className="img-fluid"/>
                <div id="hero-image-content" className="text-light text-center">
                    <h1>ONE AIR MEDIA</h1>
                    <br />
                    <h3 id="hero-tag-line">THE PLATFORM BUILT FOR CREATORS<br />WHERE ENTERTAINMENT MEETS EVERY SCREEN</h3>
                    <br />
                    <div id="hero-actions" className="d-flex gap-2">
                        <Link to="/create" className="btn btn-outline-light">Let's Create</Link>
                        <Link to="/stream" className="btn btn-outline-light">Let's Stream</Link>
                    </div>
                </div>
            </section>
            <HomeFeatures></HomeFeatures>
            <HomeBranding></HomeBranding>
            </>
        );
    }
}

export default Home
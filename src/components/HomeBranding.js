import React, { Component } from "react";
import image from "../assets/img/home-slides/home-branding.jpeg"

class HomeBranding extends Component
{
    render() {        
        return (
            <section className="home-image-slide d-flex align-items-center">
                <img src={image} width="35%" height="300px"></img>
                <h2 className="home-image-slide-text text-light text-center flex-grow-1">One Air Media</h2>
            </section>
        );
    }
}

export default HomeBranding
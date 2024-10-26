import React, { Component } from "react";

class HomeFeatures extends Component
{
    slides = [
        {
            id : 1,
            title : "FULL-SERVICE PRODUCTION",
            description : "We will aid your complete production journey"
        },
        {
            id : 2,
            title : "CONCEPT AND SCRIPT ",
            description : "We draft original content to best convey your messages to world"
        },
        {
            id : 3,
            title : "FINANCE AND MARKET",
            description : "We will support your idea and make it real in reel"
        }
    ]

    getImage(id) {
        const imagePath = require(`../assets/img/home-slides/slide-${id}.jpeg`);
        return (
            <div className="image-wrapper">
                <img src={imagePath} alt="Description" className="img-fluid" />
            </div>
        );
    }
    renderslide(slide) {
        return (
            <div className="feature-slide col-lg bg-light p-3" key={slide.id}>
                {this.getImage(slide.id)}
                <h5>{slide.title}</h5>
                <p>{slide.description}</p>
            </div>
        );
    }
    renderslides() {
        return (
            <div className="features-wrapper row gap-4"> 
                {this.slides.map(slide => {
                    return this.renderslide(slide);
                })}
            </div>
        )
    }
    
    render() {        
        return (
            <>
                <div className="container py-5">
                    {this.renderslides()}
                </div>
                <section className="text-center text-light py-5 mb-5">
                    <h2>One Screen, Diverse Entertainment and Services !</h2>
                    <h3>Escape Reality with a Click</h3>
                </section>
            </>
        );
    }
}

export default HomeFeatures
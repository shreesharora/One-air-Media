import React, { Component } from "react";
import polygon_img from "../assets/img/about-us/polygon-img.png"
import polygon from "../assets/img/about-us/polygon.png"
import rectangle_img from "../assets/img/about-us/rectangle_img.png"
import rectangle from "../assets/img/about-us/rectangle.png"
import icon_mission from "../assets/img/about-us/icon-mission.png"
import icon_goal from "../assets/img/about-us/icon-goal.png"
import icon_vision from "../assets/img/about-us/icon-vision.png"
import camera from "../assets/img/about-us/camera.png"
import camera_overlay from "../assets/img/about-us/camera_ovelay.png"

import "../css/about-us.scss";

class Home extends Component
{
    render() {
        return (
            <>
                <section>
                    <br />
                    <h1 className="text-light text-center"><span className="text-brown">Hear About</span> Our Story!</h1>
                    <br />
                    <br />
                    <p className="text-light text-center">At One Air Media, we are dedicated to achieving excellence<br />in everything we design, produce, and showcase. </p>
                </section>
                <section className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h3 className="text-light">Redefining the Boundaries of <br/><span className="text-brown">Streaming and Production</span></h3>
                                <br />
                                <div className="" id="production-block">
                                    <div className="bg-white">
                                        <p className="block-heading"><img src={icon_vision}/> Vision</p>
                                        <p>Become a leading force in the digital industry by redefining the art of story telling and content delivery.</p>
                                    </div>
                                    <div className="bg-white">
                                        <p className="block-heading"><img src={icon_mission}/> Mission</p>
                                        <p>Empower the creators to connect with the audiences worldwide through seamless platform.</p>
                                    </div>
                                    <div className="bg-white">
                                        <p className="block-heading"><img src={icon_goal}/> Goal</p>
                                        <p>Deliver best streaming and production solutions by continuously improving our technology and creativity.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <img src={camera_overlay} alt="camera" id="camera_overlay" height="250px" width="300px" /> */}
                    <img src={polygon_img} id="polygon_img" />
                    <img src={polygon} id="polygon" />
                </section>
                <section className="text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-xs-12 col-md-8">
                                <h3 className="text-end">Why Choose <span className="text-brown">One Air Media</span></h3>
                                <div className="background-brown" id="why-choose-block">
                                    <div className=""><p>Experts in End-to-End Solutions</p></div>
                                    <div className=""><p>Easy to use Technology</p></div>
                                    <div className=""><p>User-Centric Approach</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={rectangle_img} id="rectangle_img" />
                    <img src={rectangle} id="rectangle" />
                </section>
                <section className="text-light" id="section-commitment">
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-8 col-xl-12">
                                <h3>Our Commitments to our <span className="text-brown">Audience and Creators</span></h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <br />
                                <br />
                                <p>At One Air Media, we are truly committed to deliver our users nothing less than excellence.</p>
                                <p>We highly prioritize innovation, integrity and innovation to ensure our clients seamless top streaming and creation platform</p>
                                <p>We believe in building meaningful solutions that can easily connect creators with views and foster a long term relation.</p>
                            </div>
                        </div>
                    </div>
                    <img src={camera_overlay} alt="camera" id="camera_overlay" height="250px" width="300px" />
                    <img src={camera} alt="camera" id="camera" height="275px" width="250px"/>
                </section>
                <div className="clearfix"></div>
            </>
        );
    }
}

export default Home
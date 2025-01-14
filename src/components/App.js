
import React, { Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ComingSoon from "../pages/ComingSoon";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";

class App extends Component
{
  render() {
    return (
        <BrowserRouter>
              <div className="page-wrapper bg-black">
                <Header />
                  <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/contact-us" Component={ComingSoon}></Route>
                    <Route path="/about-us" Component={AboutUs}></Route>
                    <Route path="/subscribe" Component={ComingSoon}></Route>
                    <Route path="/create" Component={ComingSoon}></Route>
                    <Route path="/stream" Component={ComingSoon}></Route>
                  </Routes>
              </div>
              <Footer />
        </BrowserRouter>
    )
  }
}


export default App;


import React, { Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import Contact from "../pages/Contact";
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
                    {/* <Route path="/contact" Component={Contact}></Route> */}
                    {/* <Route path="/about" Component={About}></Route> */}
                  </Routes>
              </div>
              <Footer />
        </BrowserRouter>
    )
  }
}


export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          
          

          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

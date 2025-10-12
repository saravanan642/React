import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

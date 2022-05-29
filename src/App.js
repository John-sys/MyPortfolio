import React from "react";
import { Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Homepage from "./views/Homepage";



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

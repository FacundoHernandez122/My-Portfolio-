import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreMi from "./components/SobreMi";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreMi" element={<SobreMi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

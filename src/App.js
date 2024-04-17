import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar/sidebar";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <div style={{ marginLeft: "250px", padding: "20px" }}>

        <Routes>
          <Route path="/" element={<Home />} />  
          {/* <Route path="/about" element={<About />} />  */}
        
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

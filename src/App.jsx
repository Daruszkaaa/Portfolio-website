import React from 'react'
import {createRoot} from "react-dom/client";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";

//VIEWS

import Contact from "./views/Contact";
import Home from "./views/Home";
import Projects from "./views/Projects";


function App() {

  return (
 
     <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </Router>
  )
}

export default App

import React from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from  'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./pages/home";
import Contato from "./pages/contato";
import Horarios from "./pages/horarios";
import Interesses from "./pages/interesses";


function App(){
   return(
    <body>
    <Router>
        <Navbar/>  
       
        <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/contato" element={<Contato/>}></Route>
            <Route path="/horarios" element={<Horarios/>}></Route>
            <Route path="/interesses" element={<Interesses/>}></Route>
        </Routes>

    <Footer/>
    </Router>
    </body>
   );
}export default App;
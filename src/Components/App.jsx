import React from "react";
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Help from "./Help"
import CompanyFormation from "./CompanyFormation";
import CompanyTypes from "./CompanyTypes";
import Opc from "./Opc";
import Llp from "./LLP";
// import Footer from "./Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/about" element = {<About/>}/>
                <Route path = "/contact" element = {<Contact/>}/>
                <Route path = "/help" element = {<Help/>}/>
                <Route path="/companyFormation" element = {<CompanyFormation/>}/>
                <Route path="/companyTypes" element = {<CompanyTypes/>}/>
                <Route path="/OpcRegistration" element = {<Opc/>}/>
                <Route path="/LlpRegistration" element = {<Llp/>}/>
            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
    )
}
export default App;
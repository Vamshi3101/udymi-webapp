import React from "react";
import Header from "./Header"
import Home from "./Home"
import Contact from "./Contact"
import CompanyFormation from "./CompanyFormation";
import CompanyTypes from "./CompanyTypes";
import Opc from "./Opc";
import Llp from "./LLP";
import Pvt from "./Pvt";
import Ngo from "./Ngo";
import RegisterSteps from "./StartupIndiaAndDPIIT";
import LoginPage from "./LoginPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./ScrollToTop";
// import Footer from "./Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App(){
    return (
        <BrowserRouter>
            <Header/>
            <ScrollToTop/>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/contact" element = {<Contact/>}/>
                <Route path="/companyFormation" element = {<CompanyFormation/>}/>
                <Route path="/companyTypes" element = {<CompanyTypes/>}/>
                <Route path="/OpcRegistration" element = {<Opc/>}/>
                <Route path="/LlpRegistration" element = {<Llp/>}/>
                <Route path="/PvtLtdRegistration" element = {<Pvt/>}/>
                <Route path="/Section8Registration" element = {<Ngo/>}/>
                <Route path="/startup-india-and-Dpiit" element = {<RegisterSteps/>}/>
                <Route path="/loginPage" element = {<LoginPage/>}/>
            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
    )
}
export default App;
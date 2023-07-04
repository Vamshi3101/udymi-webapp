import React from "react";
import {NavLink} from "react-router-dom";
import { Dropdown } from "./Dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "../header.css"
function Header(){
    return (
        <div className="headerDiv">
            <header className="header">
                <nav>
                    <NavLink to = "/" className="navlinks">Home</NavLink>
                    <NavLink to = "/about" className="navlinks">About</NavLink>
                    <NavLink to = "/contact" className="navlinks">Contact</NavLink>
                    <NavLink to = "/help" className="navlinks">Help</NavLink>
                    <Dropdown/>
                </nav>
                <form action="" class="search-bar">
                    <input type="text" placeholder="Search..." className="search-bar-input"/>
                    <button className="search-bar-btn"><FontAwesomeIcon icon={faMagnifyingGlass} className="fnt-icon"/></button>
                </form>
            </header>
        </div>
    )
}
export default Header;
import React from 'react'
import "../Dropdown.css"
import { Link } from 'react-router-dom';
export const Dropdown = () => {
  return (
<>
<div className='dropdown'>
  <button className="dropbtn">CFR <span style={{ color: "white" }}>&</span> ACS</button>
 <div className='dropdown-content'>
  <Link to="/msme-registration" >MSME Registration</Link>
  <Link to="/companyFormation">REGISTRATION AS OPC, Pvt Ltd ,LLP, NGO etc</Link>
  <Link to="/startup-india-and-Dpiit">STARTUP INDIA & DPIIT</Link>
 </div> 
</div>

</>
  )
}
import React from "react";
// import { FiPhone } from "react-icons/fi";
import ExpertSection from "./ExpertSectionForDPIIT"

const RegisterSteps = () => {
  return (
    <>
    <div className="py-1 mb-2 mt-2 bg-success text-white text-center ml-10 mr-10"><h3>Welcome to Department for Promotion of Industry and Internal Trade Portal</h3></div>
    {/* <div className="py-1 ml-10 badge text-bg-primary text-center">Welcome to Department for Promotion of Industry and Internal Trade G2B Portal</div> */}
<div className="container py-5 bg-dark">
      <h2 className="text-danger  text-center mb-4 text-uppercase">not a registered user?</h2>
        <div className="text-center">
          <a href="https://dpiit.gov.in/">
              <button className="btn btn-secondary me-3">Register Here</button>
          </a>    
        </div>
      <div className="container text-light">
      <h4 className="mt-4 text-info"><u>Why Register as a Member</u></h4>
      <p>
        Department for Promotion of Industry and Internal Trade G2B Portal is an integrated platform providing access to a number of Government to Business (G2B) services such as filing of Industrial Entrepreneurs Memorandum (IEM) and Industrial License (IL) applications Online.
      </p>
      <p>
        Department for Promotion of Industry and Internal Trade G2B Portal is a secure online platform built with all the required authentication mechanisms for submitting IEM and IL applications.
      </p>
      <h4 className="mt-4 text-info"><u>Steps of registration</u>:</h4>
      <ol>
        <li>Submit Online Form</li>
        <li>Select Username</li>
        <li>Verify email ID and mobile no</li>
      </ol>
    </div>
        <div className="container py-5 text-light">
          <h4 className="text-danger  text-center mb-4 text-uppercase"><u>Eligibility for the Registration on DPIIT</u></h4>
          {/* <h3 className="px-3 text-danger mb-2 text-left">List of requirements:</h3> */}
          <ul>
            <li>
              Startup must be registerd as private limited company
            </li>  
            <li>
              Previous year turn over should be greater then 100 crores
            </li>
            <li>
              Startup is only considered if it is 10 year old from the incorporation date.
            </li>
            <li>
              Startup should be innovative or improvent exist in products
            </li>
          </ul>
        </div>
    <ExpertSection/>
    <div className="row text-center">
        <div className="col">
          <a href="https://drive.google.com/file/d/1bSKPKaHdNfRSnMjcfmUpQLavV5OKI6aZ/view?usp=sharing">
          <button className="btn btn-secondary me-2">Demo PDF File</button>
          </a>
          <a href="https://www.youtube.com/watch?v=ycbCQAgBWyY">
          <button className="btn btn-secondary">Demo Video</button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegisterSteps;
import React from "react";
import { FiPhone } from "react-icons/fi";
const ExpertSection = () => {
  return (
    <div className="container py-5 text-light ">
      <h4 className="text-danger  text-center mb-4 text-uppercase"><u>Documents for startup india regulation</u></h4>
      <h5 className="mb-4  text-center font-weight-bold text-success">How to register a company in startup india?</h5>
      <h5 className="px-3 text-danger mb-2 text-left"><u>List of required documents</u>:</h5>
      <ul>
        <li>
          Certificate of incorporation
        </li>  
        <li>
          List of Partners or Director
        </li>
        <li>
          Contect details of the Partners and director
        </li>
        <li>
          Details about the certificate received from government like environment pollution free etc
        </li>
         <li>
          Details of the investers and investments 
        </li> <li>
          Business idea behind tha startup and growth plan
        </li> <li>
          Website link pf the Startup
        </li> 
      </ul>
      <div className="text-center text-info">
          <a href="https://dpiit.gov.in/">
              <button className="btn btn-secondary me-3">Register Here</button>
          </a>    
        </div>
      <div className="text-center container pt-5">
      <a href="9509275163">
      <button className="btn btn-primary "> <FiPhone className="me-2" />Talk to our experts</button>
      </a>
      </div>
    </div>
  );
};

export default ExpertSection;
import React from "react";
export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            To Know more about registration click on these links
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <a href={d.link} target="_blank" rel="noopener noreferrer"> <i className={d.icon}></i></a>
                  <div className="service-desc">
                  <a href={d.link} target="_blank" rel="noopener noreferrer"> <h3>{d.name}</h3></a>
                    {/* {d.text} */}
                  </div>
                </div>
                //  <a style={{paddingTop:'70px'}} href={'https://eudyogaadhaar.org/?gad=1&gclid=Cj0KCQjwnf-kBhCnARIsAFlg490RHtAWIkW6V2FtoRGbsjtHoHBPsOYOUoPyqBKg3Jz0aSUwW5f3HN4aAtsIEALw_wcB'} target="_blank" rel="noopener noreferrer"><b><u>Link of official website for registration</u></b></a>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
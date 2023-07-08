import React from "react";
import MsmeForm from "./MsmeForm";
import "../Msme.css";
const Box = () => {
    return <div className="msme-Box">
      <div className='B'><b>Key Points:-</b></div>
      <div className='t'>
        <div>(i) a micro enterprise, where the investment in plant and machinery or equipment does not exceed one crore rupees and turnover does not exceed five crore rupees.</div>
        <div>(ii) a small enterprise, where the investment in plant and machinery or equipment does not exceed ten crore rupees and turnover does not exceed fifty crore rupees.</div>
        <div>(iii) a medium enterprise, where the investment in plant and machinery or equipment does not exceed fifty crore rupees and turnover does not exceed two hundred and fifty crore rupees.</div>
        <div>(iv)MSME Registration is free, paperless and based on self- declaration</div>
      </div>
    </div>;
  };
  const buttonStyle = {
    backgroundColor: 'darkgreen',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
    
  };
  const handleClick = () => {

    console.log('Button clicked!');
  };
function MsmeRegistration(){
    return (
        <div className='w'>
        <div className='A'><b>MSME  REGISTRATION</b></div>
        <div className='l'></div>
        <Box />
        <div className='l'></div>
        <div className='ol'>
        <div className='hp'>
          <div className='B1'><b>Documents Required:-</b></div>
          <div className='t1'>
            <div>1.PAN Card</div>
            <div>2.Aadhar Card</div>
            <div>3.Business Address Proof</div>
            <div>4.Bank details</div>
            <div>5.GSTIN</div>
           </div>
          
   </div>
   <div className='Y'></div>
      <div className='JK' style={{paddingTop:'10px',display:'flex',flexDirection:'column'}}>
             {/* <BackgroundImageExample /> */}
            {/* <img src= {'C:\Users\Dell\OneDrive\Desktop\RC\company-registration/1.jpg'} alt="Image" style={{height:'210px' , width:'300px'}}/> */}
            <h2><b>To Know more about MSME registration watch this video</b></h2>
            <div style={{height:'30px'}}></div>
            <a href={'https://www.youtube.com/watch?v=jcsMV-B20cA'} target="_blank" rel="noopener noreferrer"><button style={buttonStyle}  onClick={handleClick}>Play Video</button></a>
            <div style={{height:'20px'}}></div>
            <a href={'https://msme.gov.in/sites/default/files/FlipbookEnglishSchemeBooklet.pdf'} target="_blank" rel="noopener noreferrer"><button style={buttonStyle}  onClick={handleClick}>Download pdf</button></a>

      </div>
      <div style={{width:'100px'}}></div>
      <div className='JM' style={{paddingTop:'10px',display:'flex',flexDirection:'column',backgroundColor:'grey',fontSize:'20px'}}>
            
      <a style={{paddingTop:'70px'}} href={'https://eudyogaadhaar.org/?gad=1&gclid=Cj0KCQjwnf-kBhCnARIsAFlg490RHtAWIkW6V2FtoRGbsjtHoHBPsOYOUoPyqBKg3Jz0aSUwW5f3HN4aAtsIEALw_wcB'} target="_blank" rel="noopener noreferrer"><b><u>Link of official website for registration</u></b></a>
      </div>
      
   </div>
   <div style={{height:'35px'}}></div>
   <MsmeForm/>
        </div>
    )
}
export default MsmeRegistration;
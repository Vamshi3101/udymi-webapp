import React, { useState } from 'react';
import "../Msme.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

const MsmeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic
    console.log(formData);
  };

  return (
    <div>
      <div style={{fontSize:'30px', textAlign:'center'}}> <b><h2>For Futher Queries, Contact Us <i class="bi bi-envelope"></i></h2></b></div>
      <div style={{height:'20px'}}></div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-box">
          <label className='msme-label' htmlFor="name" style={{paddingRight:'10px'}}>Name:</label>
          <input className='msme-input' type="text" id="name" name="name" style={{padding:'10px',width:'400px'}} value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-box">
          <label className='msme-label' htmlFor="email" style={{paddingRight:'10px'}}>Email:</label>
          <input className='msme-input' type="email" id="email" name="email" style={{padding:'10px',width:'400px'}} value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-box">
          <label className='msme-label' htmlFor="message">Message:</label>
          <textarea className='msme-textarea' id="message" name="message" style={{paddingTop:'20px',paddingLeft:'10px',width:'400px'}} value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit" style={{ backgroundColor: 'darkblue',color: 'white',padding: '10px 20px', fontSize: '16px', borderRadius: '4px',cursor: 'pointer',width:'200px',transform: 'translateX(50px)'}}>Submit</button>
      </form>
    </div>
  );
};

export default MsmeForm;
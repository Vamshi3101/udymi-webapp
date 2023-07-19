import React from "react";
function Contact(){
    return (
        <div style={{backgroundColor:"black"}}>
        <div class="container">
            <div className="px-4 py-5 text-center mb-5">
            <h1 className="display-4 pt-5 mb-5 fw-bold text-warning">Contact Us</h1>
            <div className="col-lg-6 mx-auto">
            <p className="display-6 lead pb-5 mb-4 text-light">Have questions? We have answers.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <p className="text-light">Want to get in touch? Fill out the form below to send me a message and We will get back to you as soon as possible!</p>
                <form name="sentMessage" id="contactForm" novalidate="">
                <div className="control-group">
                    <div classname="form-group floating-label-form-group controls">
                    <label className="text-info">Name</label>
                    <input type="text" className="form-control" placeholder="Name" id="name" required="" data-validation-required-message="Please enter your name."/>
                    <p classname="help-block text-danger"></p>
                    </div>
                </div>
                <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                    <label className="text-info">Email Address</label>
                    <input type="email" className="form-control" placeholder="Email Address" id="email" required="" data-validation-required-message="Please enter your email address."/>
                    <p className="help-block text-danger"></p>
                    </div>
                </div>
                <div className="control-group">
                    <div className="form-group col-xs-12 floating-label-form-group controls">
                    <label className="text-info">Phone Number</label>
                    <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required="" data-validation-required-message="Please enter your phone number."/>
                    <p className="help-block text-danger"></p>
                    </div>
                </div>
                <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                    <label className="text-info">Message</label>
                    <textarea rows="5" className="form-control" placeholder="Message" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                    </div>
                </div>
                <br/>
                <div id="success"></div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary mb-5" id="sendMessageButton">Send</button>
                </div>
                </form>


            </div>
            </div>
        </div>
        </div>
    )
}
export default Contact;
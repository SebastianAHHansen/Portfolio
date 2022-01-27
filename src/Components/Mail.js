import React from 'react';
import emailjs from 'emailjs-com'

const Mail = () => {
    function sendEmail (e) {
        e.preventDefault ();
        emailjs.sendForm('service_yil2fuj', 'template_f1daxsm', e.target, "user_KcSNBl8d6Alo2ZATWZDvH"
        ).then (res => {
            console.log(res);
        }).catch(err => console.log(err));
        e.target.reset()
    }
  return( 
    <div className="form-content">
      <form className='row' onSubmit={sendEmail}>
      <div className="col-8 form-group mx-auto">
          <h5>Name</h5>
          <input className='form-control' placeholder="Name" type ="text" name = "user_name" required/>
          </div>
          <div className="col-8 form-group mx-auto">
          <h5>Email</h5>
          <input className='form-control' placeholder="Email" type ="email" name ="user_email" required/>
          </div>
          <div className="col-8 form-group mx-auto">
          <h5>Company</h5>
          <input className='form-control' placeholder="Company" type ="company" name="user_company" required/>
          </div>
          <div className="col-8 form-group mx-auto">
          <h5>Telephone</h5>
          <input className='form-control' placeholder="Telephone" type="number" name="user_phone" required/>
          </div>
          <div className="col-8 form-group mx-auto">
          <h5>Message</h5>
          <textarea className='form-control' placeholder="Enter Message" name="user_message" rows ='2' required/>
          </div>
          <div className="submit-button">
          <input type="submit" 
          value='send message'
          className='btn btn-success'
          /></div>
      </form>
  </div>
  );
}

export default Mail;

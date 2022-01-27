import React from "react";
import {useNavigate} from 'react-router-dom';
import Mail from "../Components/Mail";

function ContactPage(props) {
    let navigate = useNavigate();
  return (
     <div className="contact-content">
        <h2>Sounds this interesting? Let's connect!</h2>
        <h6>Now that you know everthing about me, I'm interested in getting to know you aswell.</h6>
        <h6>Please, fill in your contact information and let us get in touch!</h6>
        <h6>Else, You revice all my contact information in my Curriculum Vitae.</h6>
        <Mail />
        <button class="btn btn-success" onClick={() => {
                    navigate("/")
                }}>Home Page</button>
     </div>
  );
}

export default ContactPage;
import React from "react";
import {useNavigate} from 'react-router-dom';


function AboutPage(props) {
let navigate = useNavigate();
   return (
      <div className="content">
         <h2>About</h2>
         <h6>Here is my Curriculum Vitae, Cover Letter and Work References for Download.</h6>
         <button class="btn btn-success" type="submit">Curriculum Vitae</button>
         <button class="btn btn-success">Cover Letter</button>
         <button class="btn btn-success">Work References</button>
            <h4>Description</h4>
            <h6>Lorem</h6>
            <h4>Work Experience</h4>
            <h6>Lorem</h6>
            <h4>Education & School</h4>
            <li><h6>2021-2023 - Front End Developer - KYH</h6></li>
            <li><h6>2016-2020 - Bachelor's Programme in Human Geography - Stockholm University</h6></li>
            <li><h6>React, Bootstrap, CSS, UI & UX</h6></li>
            <h4>Interested? Let's have a Chat!</h4>
         <button class="btn btn-success" onClick={() => {
                  navigate("/contact")
               }}>Contact</button>
      </div>
   );
}


export default AboutPage;

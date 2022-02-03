import React from "react";
import {useNavigate} from 'react-router-dom';
// import profile from '../img/profile.jpg';
// import me from '../img/Me.jpg';
import person1 from '../img/person1.jpg';

function HomePage(props) {
let navigate = useNavigate();
  return (
     <div className="content">
        <h2>Sebastian Hansens Portfolio</h2>
        <h4>Front End Developer</h4>
           <li><h6>Full name: Sebastian Hansen</h6></li>
           <li><h6>Age: 29 years old</h6></li>
           <li><h6>City: Stockholm</h6></li>
           <li><h6>Languages: Swedish, English, Deutsch, Danish</h6></li>
         <img src={person1} className="profilepic" alt="profilepic" />
    <br/>
           <button class="btn btn-success" onClick={() => {
                    navigate("/about")
                }}>About</button>
     </div>

  );
}

export default HomePage;
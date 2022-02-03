import React from 'react'
import { BrowserRouter as Router,Routes,Route ,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import FooterBS from "./Components/FooterBS";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import SkillsPage from ".Pages/SkillsPage";
import ErrorPage from "./Pages/ErrorPage";
import {useNavigate} from 'react-router-dom';


class Navbar extends React.Component {
    render() {
      return (
        <Router>
          <Container className="p=0" fluid ={true} >
            <Navbar className="border-bottom"  bg="transparent" expand ="lg">
              <Navbar.Brand className="nav-logo">Sebastian Hansen</Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id = "navbar-toggle">
                <Nav className ="ml-auto">
                  <Link className="nav-link" to ="/">Home</Link>
                  <Link className="nav-link" to ="/about">About</Link>
                  <Link className="nav-link" to ="/skills">Developer Skills</Link>
                  <Link className="nav-link" to ="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
                  <Routes>
                  <Route path="/" element = {<HomePage />} />
                  <Route path="/about" element = {<AboutPage />} />
                  <Route path="/contact" element = {<ContactPage />} />
                  <Route path="/skills" element = {<SkillsPage />} />
                  <Route path="*" element = {<ErrorPage />} />
                  </Routes>
            <FooterBS />
          </Container>
        </Router>
      );
    }
  }


const Navbar = () => {
    return (
        <nav className="navbav">
            <div className="nav-logo">
            <h1>Sebastian Hansen</h1>
            </div>

            <div className="nav-links">
            <li ><a href="#">Home</a> </li>
            <li ><a href="#">Skills</a> </li>
            <li ><a href="#">About</a> </li>
            <li ><a href="#">Contact</a> </li>
            </div>
        </nav>
    )
}

export default Navbar


// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <button
//       class="navbar-toggler"
//       type="button"
//       data-mdb-toggle="collapse"
//       data-mdb-target="#navbar"
//       aria-expanded="false"
//     >
//       <i class="fas fa-bars"></i>
//     </button>
//     <div
//       class="collapse navbar-collapse justify-content-center"
//       id="navbar"
//     >
//       <ul class="navbar-nav mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">About</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Skills</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
import { BrowserRouter as Router,Routes,Route ,Link } from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import FooterBS from "./Components/FooterBS";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ErrorPage from "./Pages/ErrorPage";
import {useNavigate} from 'react-router-dom';


class App extends React.Component {
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
                <Link className="nav-link" to ="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
                <Routes>
                <Route path="/" element = {<HomePage />} />
                <Route path="/about" element = {<AboutPage />} />
                <Route path="/contact" element = {<ContactPage />} />
                <Route path="*" element = {<ErrorPage />} />
                </Routes>
          <FooterBS />
        </Container>
      </Router>
    );
  }
}

export default App;
import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';

function Footer () {
    return (  
        <footer className="mt-5">
                <hr/>
            <Container fluid={true}>
                <Row className="p-3 d flex justify-content-between">
                    <Col className="p-0" md={6} sm ={12}>
                    <h5 className="footer-header">Contact Info</h5>
                        <ul>
                            <li className="footer-links">
                                <i class="fas fa-phone"></i>
                                <h6> Telephone: 0735 123 456</h6>
                                </li>
                            <li className="footer-links"> 
                            <i class="far fa-paper-plane"></i>
                                <h6>Mail: sebastian@asmin.com</h6>
                                <FaGithub />
                                <FaBeer />

                            </li>
                        </ul>
                    </Col>
                    <Col className="p-0 d flex justify-content-between" md={6}>
                    <h5 className="footer-header">Social Media</h5>
                        <ul>
                            {/* <li className="footer-links">
                            <i class="fab fa-github"></i>
                                <h6>Github</h6>
                            </li>
                            <li className="footer-links">
                            <i class="fab fa-facebook"></i>
                            <h6>Facebook</h6>
                            </li> */}
                            <span>
                            <li className="footer-links">
                            <a rel="noopener noreferrer" href="https://github.com" target="_blank">
                            <i class="fab fa-github"></i>
                                <h6>Github</h6>
                                </a>
                            </li>
                            </span>
                            <span>
                            <li className="footer-links">
                            <a rel="noopener noreferrer" href="https://facebook.com" target="_blank">
                            <i class="fab fa-facebook"></i>
                                <h6>Facebook</h6>
                                </a>
                            </li>
                            </span>
                            <span>
                            <li className="footer-links">
                            <a rel="noopener noreferrer" href="https://linkedin.com" target="_blank">
                            <i class="fab fa-linkedin"></i>
                                <h6>Linked In</h6>
                                </a>
                            </li>
                            </span>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
 
export default Footer;
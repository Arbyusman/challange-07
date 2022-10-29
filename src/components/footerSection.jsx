import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container,  Nav,  Navbar, Row } from "react-bootstrap";
import imageLogo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function FooterSection() {
  return (
    <Navbar fluid className="d-flex justify-content-center my-5 px-0 mx-0">
    <Container fluid
      id="footer"
      className="row justify-content-beetwen  px-0 mx-0"
      style={{width: "90%", fontSize: "14px"}}
    >
      <Col fluid  id="footer-alamat" className="col-4 ps-0 pe-3">
        <Row className="nav flex-column fw-light">
          <Col className="nav-item  mb-2">
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
          </Col>
          <Col className="nav-item  mb-2">binarcarrental@gmail.com</Col>
          <Col className="nav-item  mb-2">081-233-334-808</Col>
        </Row>
      </Col>

      <Col id="footer-nav" className="nav d-flex flex-column col-2 ps-0 pe-5">
        <Col className="nav-item mb-2">
          <Nav.Link href="#service" className="nav-link p-0 text-black">Our Service</Nav.Link>
        </Col>
        <Col className="nav-item mb-2">
          <Nav.Link href="#whyus" className="nav-link p-0 text-black">Why Us</Nav.Link>
        </Col>
        <Col className="nav-item mb-2">
          <Nav.Link href="#testimony" className="nav-link p-0 text-black">Testimonial</Nav.Link>
        </Col>
        <Col className="nav-item mb-2">
          <Nav.Link href="#faq" className="nav-link p-0 text-black">FAQ</Nav.Link>
        </Col>
      </Col>

      <Col 
        id="footer-connect-with-us"
        className="col-4 justify-content-beetwen align-content-center  mb-5"
      >
        <p className="fw-light">Connect with us</p>
        <ul className="nav flex-row  ">
          <Row fluid
            className="rounded-circle d-flex justify-content-center align-items-center  mx-2 "
            style={{height: "36px", width: "36px", backgroundColor: "#0d28a6"}}
          >
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" style={{color: "white"}}/> 
          </Row>

          <Row fluid
            className="rounded-circle d-flex justify-content-center align-items-center  mx-2  "
            style={{height: "36px", width: "36px", backgroundColor: "#0d28a6"}}
          >
            <FontAwesomeIcon icon="faCoffee" style={{color: "white"}}/> 
          </Row>
          <Row fluid
            className="rounded-circle d-flex justify-content-center align-items-center  mx-2 "
            style={{height: "36px", width: "36px", backgroundColor: "#0d28a6"}}
          >
            <i className="fa-brands fa-twitter" style={{color: "white"}}></i>
          </Row>
          <Row fluid
            className="rounded-circle d-flex justify-content-center align-items-center mx-2  "
            style={{height: "36px", width: "36px", backgroundColor: "#0d28a6"}}
          >
            <i className="fa-regular fa-envelope" style={{color: "white"}}></i>
          </Row>
          <Row fluid
            className="rounded-circle d-flex justify-content-center align-items-center mx-2 "
            style={{height: "36px", width: "36px", backgroundColor: "#0d28a6"}}
          >
            <i className="fa-brands fa-twitch" style={{color: "white"}}></i>
          </Row>
        </ul>
      </Col>

      <Container id="footer-logo" className="col-2 pe-2 justify-content-center align-content-center ps-2 ">
        <p className="fw-light" style={{marginLeft:"20%"}}>Copyright Binar 2022 </p>
        <img fluid src={imageLogo} style={{marginLeft:"20%"}} />
      </Container>
    </Container>
  </Navbar>
  );
}


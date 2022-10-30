import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col,  Nav, Navbar, Row,Image } from "react-bootstrap";
import imageLogo from "../assets/images/logo.png";
import { FiFacebook,FiInstagram ,FiTwitter,FiMail,FiTwitch} from "react-icons/fi";

export default function FooterSection() {
  return (
    <Navbar fluid="true" className="d-flex justify-content-center my-5 px-0 mx-0">
      <Row
        fluid="true"
        id="footer"
        className="row justify-content-beetwen  px-0 mx-0"
        style={{ width: "90%", fontSize: "14px" }}
      >
        <Col fluid="true" id="footer-alamat" className="col-4 ps-0 pe-3">
          <Row className="nav flex-column fw-light">
            <Col className="nav-item  mb-2">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </Col>
            <Col className="nav-item  mb-2">binarcarrental@gmail.com</Col>
            <Col className="nav-item  mb-2">081-233-334-808</Col>
          </Row>
        </Col>

        <Col id="footer-nav" className="nav d-flex flex-column col-2 ps-5 ">
          <Col className="nav-item mb-2">
            <Nav.Link href="#service" className="nav-link p-0 text-black">
              Our Service
            </Nav.Link>
          </Col>
          <Col className="nav-item mb-2">
            <Nav.Link href="#whyus" className="nav-link p-0 text-black">
              Why Us
            </Nav.Link>
          </Col>
          <Col className="nav-item mb-2">
            <Nav.Link href="#testimony" className="nav-link p-0 text-black">
              Testimonial
            </Nav.Link>
          </Col>
          <Col className="nav-item mb-2">
            <Nav.Link href="#faq" className="nav-link p-0 text-black">
              FAQ
            </Nav.Link>
          </Col>
        </Col>

        <Col
          id="footer-connect-with-us"
          className="col-4 justify-content-beetwen align-content-center ps-0  mb-5"
        >
          <p className="fw-light">Connect with us</p>
          <ul className="nav flex-row  ">
            <Row
              fluid="true"
              className="rounded-circle d-flex justify-content-center align-items-center  mx-2 "
              style={{
                height: "36px",
                width: "36px",
                backgroundColor: "#0d28a6",
              }}
            >
              <FiFacebook
                className="px-0 "
                style={{ color: "white", height: "30px", width: "23px" }}
              />{" "}
            </Row>

            <Row
              fluid="true"
              className="rounded-circle d-flex justify-content-center align-items-center  mx-2  "
              style={{
                height: "36px",
                width: "36px",
                backgroundColor: "#0d28a6",
              }}
            >
              <FiInstagram
                className="px-0 "
                style={{ color: "white", height: "30px", width: "23px" }}
              />{" "}
            </Row>
            <Row
              fluid="true"
              className="rounded-circle d-flex justify-content-center align-items-center  mx-2 "
              style={{
                height: "36px",
                width: "36px",
                backgroundColor: "#0d28a6",
              }}
            >
              <FiTwitter
                className="px-0 "
                style={{ color: "white", height: "30px", width: "23px" }}
              />{" "}
            </Row>
            <Row
              fluid="true"
              className="rounded-circle d-flex justify-content-center align-items-center mx-2  "
              style={{
                height: "36px",
                width: "36px",
                backgroundColor: "#0d28a6",
              }}
            >
              <FiMail
                className="px-0 "
                style={{ color: "white", height: "30px", width: "23px" }}
              />{" "}
            </Row>
            <Row
              fluid="true"
              className="rounded-circle d-flex justify-content-center align-items-center mx-2 "
              style={{
                height: "36px",
                width: "36px",
                backgroundColor: "#0d28a6",
              }}
            >
              <FiTwitch
                className="px-0 "
                style={{ color: "white", height: "30px", width: "23px" }}
              />{" "}
            </Row>
          </ul>
        </Col>

        <Col
          id="footer-logo"
          className="col-2 pe-2 justify-content-center align-content-center ps-2 "
        >
          <p className="fw-light">Copyright Binar 2022 </p>
          <Image fluid="true" src={imageLogo} />
        </Col>
      </Row>
    </Navbar>
  );
}

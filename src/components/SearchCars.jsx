import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Button,
  Image,
  Row,
  Col,
  Card,
  Form,
} from "react-bootstrap";
import heroImage from "../assets/images/img_car.png";

export default function SearchCars() {
  return (
    <div>
      {/* hero section */}
      <Container
        fluid
        className="pt-3 g-0 d-flex "
        style={{ background: "#F1F3FF" }}
      >
        <Container
          fluid
          id="hero"
          className="d-flex justify-content-between mx-0 px-0 "
        >
          <Container
            className="ps-0"
            style={{
              marginLeft: "5%",
              marginTop: "6%",
              paddingRight: "5%",
              width: "50%",
            }}
          >
            <h1 className="fw-bold mb-3" style={{ fontSize: "36px" }}>
              Sewa & Rental Mobil Terbaik di kawasan Kendari
            </h1>
            <p className="fw-light mb-3">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </Container>
          <Image
            src={heroImage}
            className="px-0 mx-0"
            alt="..."
            style={{ marginRight: "0%", width: "50%" }}
          />
        </Container>
      </Container>
      {/* End Hero */}

     
    </div>
  );
}

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
import { FiUsers } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { AiOutlineCalendar } from "react-icons/ai";

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

      {/* Search Car */}
      <Container className="container-fluid p-0 search-container">
        <Form
          action=""
          method="get"
          className="d-flex justify-content-between container-md p-3 shadow bg-body rounded search-form"
        >
          {/* Pick Driver Type */}
          <Col className="filter-box me-2">
            <label
              htmlFor="typeDriverId"
              className="d-block fw-light mb-1 search-label"
            >
              Type Driver
            </label>
            <Form.Select
              name="Select Tipe Driver"
              id="typeDriverId"
              className="w-100 shadow-sm"
            >
              <option value="Pilih Type Driver">Pilih Type Driver</option>
              <option value="Dengan Sopir">Dengan Sopir</option>
              <option value="Tanpa Sopir (Lepas Kunci)">
                Tanpa Sopir (Lepas Kunci)
              </option>
            </Form.Select>
          </Col>
          {/* End Pick Driver Type */}
          {/* Pick Date */}
          <Col className="filter-box mx-2">
            <label
              htmlFor="tanggal"
              className="d-block fw-light mb-1 search-label"
            >
              Tanggal
            </label>
            <input
              type="date"
              name="Tanggal"
              id="tanggal"
              className="w-100 shadow-sm"
            />
          </Col>
          {/* End Pick Date */}
          {/* Pick Time */}
          <Col className="filter-box mx-2">
            <label
              htmlFor="waktuJemput"
              className="d-block fw-light mb-1 search-label"
            >
              Waktu Jemput/Ambil
            </label>
            <input
              type="time"
              name="Waktu Jemput"
              id="waktuJemput"
              className="w-100 shadow-sm"
            />
          </Col>
          {/* End Pick Time */}
          {/* Pick Penumpang */}
          <Col className="filter-box mx-2">
            <label
              htmlFor="jumlahPenumpang"
              className="d-block fw-light mb-1 search-label"
            >
              Jumlah Penumpang (Opsional)
            </label>
            <input
              type="number"
              name="Jumlah Penumpang"
              id="jumlahPenumpang"
              className="w-100 shadow-sm"
              placeholder="Jumlah Penumpang"
            />
          </Col>
          {/* End Pick Penumpang */}
          <Col className="filter-btn d-flex align-items-end">
            <Button
              id="btn-carimobil"
              className="px-3 text-white fw-bolder mx-1 w-50 d-flex align-items-center"
            >
              Cari Mobil
            </Button>
            <Button
              id="btn-reset"
              className="px-3 text-white fw-bolder ms-1 w-50 d-flex align-items-center"
            >
              Reset
            </Button>
          </Col>
        </Form>
      </Container>
      {/* End Search Car */}

      {/* Card */}
      <Container
        className="container-fluid p-0"
        id="cari-mobil"
        style={{ width: "80% " }}
      >
        <Row className="card mx-1" id="tampil-mobil" style={{ height: "100%" }}>
          <Col className="justify-content-center align-items-center d-flex ">
            <Card.Img
              id="card-image"
              src=""
              className="img-fluid   shadow-sm"
              alt=""
              style={{ width: "270px", height: "160px" }}
            />
          </Col>
          <Card.Body className="card-body">
            <Card.Text id="card-name">Tipe Mobil </Card.Text>
            <Card.Title className="fw-semibold" id="card-rent">
              RP /hari
            </Card.Title>
            <Card.Text
              className="card-text"
              id="card-desc"
              style={{ height: "20%" }}
            >
              desc
            </Card.Text>
            <Col className=" d-flex">
              <FiUsers />
              <Card.Text className="ms-2" id="card-capacity">
                {" "}
                4 Orang
              </Card.Text>
            </Col>
            <Col className=" d-flex ">
              <CiSettings />
              <Card.Text className="ms-2" id="card-transmision">
                transmision
              </Card.Text>
            </Col>
            <Col className=" d-flex">
              <AiOutlineCalendar />
              <Card.Text className="ms-2" id="card-year">
                Tahun
              </Card.Text>
            </Col>
            <Col className="align-self-end">
              <Button
                
                type="button"
                className="btn btn-success fw-bold border-0 px-3 container-fluid mb-4 "
                style={{ background: "#5cb85f" }}
              >
                Pilih Mobil
              </Button>
            </Col>
          </Card.Body>
        </Row>
        <Row className="card mx-1" id="tampil-mobil" style={{ height: "100%" }}>
          <Col className="justify-content-center align-items-center d-flex ">
            <Card.Img
              id="card-image"
              src=""
              className="img-fluid   shadow-sm"
              alt=""
              style={{ width: "270px", height: "160px" }}
            />
          </Col>
          <Card.Body className="card-body">
            <Card.Text id="card-name">Tipe Mobil </Card.Text>
            <Card.Title className="fw-semibold" id="card-rent">
              RP /hari
            </Card.Title>
            <Card.Text
              className="card-text"
              id="card-desc"
              style={{ height: "20%" }}
            >
              desc
            </Card.Text>
            <Col className=" d-flex">
              <FiUsers />
              <Card.Text className="ms-2" id="card-capacity">
                {" "}
                4 Orang
              </Card.Text>
            </Col>
            <Col className=" d-flex ">
              <CiSettings />
              <Card.Text className="ms-2" id="card-transmision">
                transmision
              </Card.Text>
            </Col>
            <Col className=" d-flex">
              <AiOutlineCalendar />
              <Card.Text className="ms-2" id="card-year">
                Tahun
              </Card.Text>
            </Col>
            <Col className="align-self-end">
              <Button
                
                type="button"
                className="btn btn-success fw-bold border-0 px-3 container-fluid mb-4 "
                style={{ background: "#5cb85f" }}
              >
                Pilih Mobil
              </Button>
            </Col>
          </Card.Body>
        </Row>
        <Row className="card mx-1" id="tampil-mobil" style={{ height: "100%" }}>
          <Col className="justify-content-center align-items-center d-flex ">
            <Card.Img
              id="card-image"
              src=""
              className="img-fluid   shadow-sm"
              alt=""
              style={{ width: "270px", height: "160px" }}
            />
          </Col>
          <Card.Body className="card-body">
            <Card.Text id="card-name">Tipe Mobil </Card.Text>
            <Card.Title className="fw-semibold" id="card-rent">
              RP /hari
            </Card.Title>
            <Card.Text
              className="card-text"
              id="card-desc"
              style={{ height: "20%" }}
            >
              desc
            </Card.Text>
            <Col className=" d-flex">
              <FiUsers />
              <Card.Text className="ms-2" id="card-capacity">
                {" "}
                4 Orang
              </Card.Text>
            </Col>
            <Col className=" d-flex ">
              <CiSettings />
              <Card.Text className="ms-2" id="card-transmision">
                transmision
              </Card.Text>
            </Col>
            <Col className=" d-flex">
              <AiOutlineCalendar />
              <Card.Text className="ms-2" id="card-year">
                Tahun
              </Card.Text>
            </Col>
            <Col className="align-self-end">
              <Button
                
                type="button"
                className="btn btn-success fw-bold border-0 px-3 container-fluid mb-4 "
                style={{ background: "#5cb85f" }}
              >
                Pilih Mobil
              </Button>
            </Col>
          </Card.Body>
        </Row>

        

        
      </Container>

      {/* End Card */}
    </div>
  );
}

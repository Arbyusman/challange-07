import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Nav,
  Button,
  Image,
  Row,
  Col,
  Accordion,
  Card,
} from "react-bootstrap";
import { BiLike, BiCheck } from "react-icons/bi";
import { RiPriceTag3Line } from "react-icons/ri";
import {
  FiClock,
  FiAward,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { GoStar } from "react-icons/go";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import heroImage from "../assets/images/img_car.png";
import ourServiceImage from "../assets/images/img_service.png";
import person1 from "../assets/images/img_photo.png";
import person2 from "../assets/images/img_photo_1.png";
import person3 from "../assets/images/img_photo_2.png";

export default function LandingPageCars() {
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
              Selamat datang di Binar Car Rental. kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Nav.Link className="p-0" href="/cars">
              <Button
                className="px-3 py-2 btn btn-success fw-bold border-0"
                style={{ background: " #5cb85f" }}
              >
                Mulai Sewa Mobil
              </Button>
            </Nav.Link>
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

      {/* Our Service */}
      <Container
        id="service"
        className="d-flex justify-content-center my-5 "
        style={{ width: "90%" }}
      >
        <Container
          fluid
          id="service-container"
          className="d-flex align-items-center"
        >
          <Image
            fluid
            src={ourServiceImage}
            alt="..."
            className="w-50 me-5 d-flex justify-content-start"
          />
          <Container fluid id="our-service" className="w-50 ms-5 ">
            <Col className="">
              <h4 className="fw-bold">
                Best Car Rental for any kind of trip in Kendari!
              </h4>
              <p>
                Sewa mobil di Kendari bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
            </Col>

            <Container
              fluid
              className="d-flex flex-column justify-content-start ms-3"
            >
              <Col className="d-flex  align-items-center mb-2">
                <Row
                  className="our-service-list-icon rounded-circle justify-content-center"
                  style={{
                    background: "#cfd4ed",
                    height: "32px",
                    width: "32px",
                  }}
                >
                  <BiCheck
                    className="px-1 py-1"
                    style={{ width: "30px", height: "30px", color: "#0D28A6" }}
                  />
                </Row>
                <p className="mx-4 my-2">
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </p>
              </Col>
              <Col className="d-flex align-items-center mb-2">
                <Row
                  className="our-service-list-icon rounded-circle justify-content-center"
                  style={{
                    background: "#cfd4ed",
                    height: "32px",
                    width: "32px",
                  }}
                >
                  <BiCheck
                    className="px-1 py-1"
                    style={{ width: "30px", height: "30px", color: "#0D28A6" }}
                  />
                </Row>
                <p className="mx-4 my-2">
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </p>
              </Col>
              <Col className="d-flex align-items-center mb-2">
                <Row
                  className="our-service-list-icon rounded-circle justify-content-center"
                  style={{
                    background: "#cfd4ed",
                    height: "32px",
                    width: "32px",
                  }}
                >
                  <BiCheck
                    className="px-1 py-1"
                    style={{ width: "30px", height: "30px", color: "#0D28A6" }}
                  />
                </Row>
                <p className="mx-4 my-2">Sewa Mobil Jangka Panjang Bulanan</p>
              </Col>
              <Col className="d-flex align-items-center mb-2">
                <Row
                  className="our-service-list-icon rounded-circle justify-content-center"
                  style={{
                    background: "#cfd4ed",
                    height: "32px",
                    width: "32px",
                  }}
                >
                  <BiCheck
                    className="px-1 py-1"
                    style={{ width: "30px", height: "30px", color: "#0D28A6" }}
                  />
                </Row>
                <p className="mx-4 my-2">
                  Gratis Antar - Jemput Mobil di Bandara
                </p>
              </Col>
              <Col className="d-flex align-items-center mb-2">
                <Row
                  className="our-service-list-icon rounded-circle justify-content-center"
                  style={{
                    background: "#cfd4ed",
                    height: "32px",
                    width: "32px",
                  }}
                >
                  <BiCheck
                    className="px-1 py-1"
                    style={{ width: "30px", height: "30px", color: "#0D28A6" }}
                  />
                </Row>
                <p className="mx-4 my-2">
                  Layanan Airport Transfer / Drop In Out
                </p>
              </Col>
            </Container>
          </Container>
        </Container>
      </Container>
      {/* End Our Srvice */}

      {/* why us */}
      <Container
        fluid
        id="whyus"
        className="d-flex justify-content-center px-0 mx-0 mb-5"
      >
        <Container
          className="d-flex flex-column mx-0 px-0"
          style={{ width: " 90%" }}
        >
          <Container fluid id="whyus-title" className="px-0 mx-0">
            <h1 className="fw-bold mb-3 " style={{ fontSize: "24px" }}>
              Why Us?
            </h1>
            <p className="mb-4" style={{ fontSize: "14px" }}>
              Mengapa harus pilih Binar Car Rental?
            </p>
          </Container>
          <Container
            fluid
            id="whyus-card"
            className="d-flex justify-content-between mx-0 px-0"
          >
            <Card className="card gap-3 " style={{ width: "24%" }}>
              <Card.Body className="card-body ">
                <Row
                  className=" rounded-circle ms-1 d-flex justify-content-start mb-3 align-items-center"
                  style={{
                    height: "32px",
                    width: "32px",
                    backgroundColor: " #f9cc00",
                  }}
                >
                  <BiLike
                    className="px-1 py-1"
                    style={{ color: "white", width: "30px", height: "30px" }}
                  />
                </Row>
                <Card.Title className="card-subtitle mb-2 fw-bold">
                  Mobil Lengkap
                </Card.Title>
                <Card.Text className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="card gap-2 " style={{ width: "24%" }}>
              <Card.Body className="card-body">
                <Row
                  className="rounded-circle ms-1 d-flex justify-content-center mb-3 align-items-center"
                  style={{
                    height: "32px",
                    width: "32px",
                    backgroundColor: " #fa2c5a",
                  }}
                >
                  <RiPriceTag3Line
                    className="px-1 py-1"
                    style={{ color: "white", width: "30px", height: "30px" }}
                  />
                </Row>
                <Card.Title className="card-subtitle mb-2 fw-bold">
                  Harga Murah
                </Card.Title>
                <Card.Text className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="card gap-2 " style={{ width: "24%" }}>
              <Card.Body className="card-body">
                <Row
                  className="rounded-circle ms-1 d-flex justify-content-center mb-3 align-items-center"
                  style={{
                    height: "32px",
                    width: "32px",
                    backgroundColor: " #0d28a6",
                  }}
                >
                  <FiClock
                    className="px-1 py-1"
                    style={{ color: "white", width: "30px", height: "30px" }}
                  />
                </Row>
                <Card.Title className="card-subtitle mb-2 fw-bold">
                  Layanan 24 Jam
                </Card.Title>
                <Card.Text className="card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="card gap-2" style={{ width: "24%" }}>
              <Card.Body className="card-body">
                <Row
                  className="rounded-circle ms-1 d-flex justify-content-center mb-3 align-items-center"
                  style={{
                    height: "32px",
                    width: "32px",
                    backgroundColor: " #5cb85f",
                  }}
                >
                  <FiAward
                    className="px-1 py-1"
                    style={{ color: "white", width: "30px", height: "30px" }}
                  />
                </Row>
                <Card.Title className="card-subtitle mb-2 fw-bold">
                  Layanan 24 Jam
                </Card.Title>
                <Card.Text className="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Container>
      </Container>
      {/* End Why us */}

      {/* testimony */}
      <Container
        fluid
        id="testimony"
        className="d-flex justify-content-center align-items-center mt-2 mx-0 px-0"
      >
        <Row
          id="container-testimonial"
          className="d-flex flex-column justify-content-center align-items-center mx-0 px-0"
        >
          <Col className="d-flex justify-content-center align-items-center">
            <Row>
              <h1 className="d-flex justify-content-center align-items-center">
                Testimonial
              </h1>
              <p className="d-flex justify-content-center align-items-center">
                Berbagai review positif dari para pelanggan kami
              </p>
            </Row>
          </Col>

          <OwlCarousel
            id="owlcarousel"
            className="owl-carousel owl-theme"
            items="3"
            loop={true}
            center={true}
            margin={10}
            nav={false}
            dots={false}
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 2,
              },
            }}
          >
            <Col className="item">
              <Row>
                <Col md={3} className="text-center my-auto">
                  <Image
                    src={person1}
                    className="rounded-circle"
                    alt="GambarPhoto1"
                  />
                </Col>
                <Col>
                  <Col>
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                  </Col>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime, incidunt odit? Exercitationem earum officia est.
                    Dolore nobis totam quia dolores ad velit tempora accusamus
                    maiores eligendi, illo quidem modi fugit.
                  </p>
                  <p className="user fw-bold">John Dee 32, Bromo</p>
                </Col>
              </Row>
            </Col>
            <Col className="item">
              <Row>
                <Col md={3} className="text-center my-auto">
                  <Image
                    src={person2}
                    className="rounded-circle"
                    alt="GambarPhoto1"
                  />
                </Col>
                <Col>
                  <Col>
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                  </Col>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime, incidunt odit? Exercitationem earum officia est.
                    Dolore nobis totam quia dolores ad velit tempora accusamus
                    maiores eligendi, illo quidem modi fugit.
                  </p>
                  <p className="user fw-bold">John Dee 32, Bromo</p>
                </Col>
              </Row>
            </Col>
            <Col className="item">
              <Row>
                <Col md={3} className="text-center my-auto">
                  <Image
                    src={person3}
                    className="rounded-circle"
                    alt="GambarPhoto1"
                  />
                </Col>
                <Col>
                  <Col>
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                    <GoStar style={{ color: "#F9CC00" }} />
                  </Col>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime, incidunt odit? Exercitationem earum officia est.
                    Dolore nobis totam quia dolores ad velit tempora accusamus
                    maiores eligendi, illo quidem modi fugit.
                  </p>
                  <p className="user fw-bold">John Dee 32, Bromo</p>
                </Col>
              </Row>
            </Col>
          </OwlCarousel>

          <Col className="owl-nav">
            <button
              className="owl-prev rounded-circle me-2 p-0"
              id="customPrevBtn"
              type="button"
              role="presentation"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <FiChevronLeft style={{ width: "20px", height: "20px" }} />
            </button>
            <button
              className="owl-next rounded-circle ms-2 p-0"
              id="customNextBtn"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <FiChevronRight style={{ width: "20px", height: "20px" }} />
            </button>
          </Col>
        </Row>
      </Container>
      {/* END testimony */}

      {/* Banner */}
      <Container
        fluid
        className="d-flex flex-column px-0 mx-0 mt-5 justify-content-center align-items-center"
      >
        <Container
          fluid
          id="banner"
          className="border rounded-2 d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: "#0d28a6", color: "#ffffff", width: "90%" }}
        >
          <h1
            id="banner-title"
            className="d-flex mb-2 mt-5 text-white"
            style={{ fontSize: " 36px" }}
          >
            Sewa Mobil di Kendari Sekarang
          </h1>
          <p
            id="banner-item"
            className="mb-2 mt-2 text-center fw-light"
            style={{ width: "50%" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Nav.Link className="py-2 my-3" href="/cars">
            <Button
              className="px-3 py-2 btn btn-success fw-bold border-0"
              style={{ background: " #5cb85f" }}
            >
              Mulai Sewa Mobil
            </Button>
          </Nav.Link>
        </Container>
      </Container>
      {/* End Banner */}

      {/* FAQ */}
      <Container
        fluid
        id="faq"
        className="justify-content-center d-flex mt-5 px-0 mx-0"
      >
        <Container
          fluid
          id="container-faq"
          className="d-flex justify-content-center mx-0 px-0"
          style={{ width: "90%" }}
        >
          <Container
            fluid
            className="mx-0 px-0"
            id="accordion-title "
            style={{ width: "43%" }}
          >
            <h1 className="fw-bold mb-3" style={{ fontSize: "24px" }}>
              Frequently Asked Question
            </h1>
            <p className="fw-light" style={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </Container>

          <Accordion style={{ width: "57%" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Apa saja syarat yang dibutuhkan?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Berapa hari minimal sewa mobil lepas kunci?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Apakah Ada biaya antar-jemput?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Bagaimana jika terjadi kecelakaan
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </Container>
      {/* End FAQ */}
    </div>
  );
}

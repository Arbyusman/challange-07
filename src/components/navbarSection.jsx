import React from "react";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import imageCar from "../assets/images/logo.png";

export default function NavbarSection() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          fluid
          key={expand}
          expand={expand}
          className=" navbar-expand-lg  d-flex "
          sticky="top"
          style={{ fontSize: "14px", background: "#F1F3FF",  }}
        >
          <Container
            fluid
            className=" me-0 ps-0 pe-0"
            id="navbar-logo"
            style={{marginLeft:"5%"}}
            
          >
              <Navbar.Brand href="#">
                <img src={imageCar} className="mx-0" alt="img-logo" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    className="offcanvas-title fw-bold pt-4"
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  >
                    BCR
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Container
                    id="sidebar"
                    className="d-flex align-items-center justify-content-end"
                  >
                    <Nav.Link
                      className="nav-item nav-link px-3 py-2"
                      href="#service"
                    >
                      Our Services
                    </Nav.Link>
                    <Nav.Link
                      className="nav-item nav-link px-3 py-2"
                      href="#whyus"
                    >
                      Why Us
                    </Nav.Link>
                    <Nav.Link
                      className="nav-item nav-link px-3 py-2"
                      href="#testimony"
                    >
                      Testimonial
                    </Nav.Link>
                    <Nav.Link
                      className="nav-item nav-link px-3 py-2"
                      href="#faq"
                    >
                      FAQ
                    </Nav.Link>
                    <Nav.Link className="nav-item nav-link px-3 py-2" href="#">
                      <Button
                        type="button"
                        className="btn btn-success fw-bold border-0 px-3"
                        style={{ background: "#5cb85f" }}
                      >
                        Register
                      </Button>
                    </Nav.Link>
                  </Container>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

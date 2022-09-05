import "./style.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Footer = () => {
  return (
    <div className=".container footer-con">
      <footer className="container-fluid footer">
        <div className="main-footer">
          <Container>
            <Row>
              <Col>
                {" "}
                <Nav defaultActiveKey="/home" className="flex-column">
                  <h6>Follow us on</h6>
                  <div className="icons">
                    <a href="https://www.facebook.com/GrabOne" target="_blank">
                      <i class="bi bi-facebook icons-so"></i>
                    </a>{" "}
                    <a href="https://twitter.com/grab_one" target="_blank">
                      <i class="bi bi-twitter icons-so"></i>
                    </a>{" "}
                    <a
                      href="https://www.instagram.com/grabone_nz/"
                      target="_blank"
                    >
                      <i class="bi bi-instagram icons-so"></i>
                    </a>{" "}
                    <a href="https://www.youtube.com/grabonenz" target="_blank">
                      <i class="bi bi-youtube icons-so"></i>
                    </a>{" "}
                  </div>
                  <h6 className="Get-app">Get app exclusive deals</h6>
                  <Button variant="info" className="download">
                    {" "}
                    <i class="bi bi-phone"></i> Download our App
                  </Button>{" "}
                </Nav>
              </Col>
              <Col>
                {" "}
                <Nav defaultActiveKey="/home" className="flex-column">
                  <h6 className="head-footer">GrabOne</h6>
                  <div>
                    <Nav.Link href="/home">Contact Us</Nav.Link>
                    <Nav.Link eventKey="link-1">About Us</Nav.Link>
                    <Nav.Link eventKey="link-2">Terms & Return</Nav.Link>
                    <Nav.Link eventKey="link-3">Blog</Nav.Link>
                    <Nav.Link eventKey="link-3">Gift Cards</Nav.Link>
                  </div>
                </Nav>
              </Col>
              <Col>
                {" "}
                <Nav defaultActiveKey="/home" className="flex-column">
                  <h6 className="head-footer">My Account</h6>

                  <Nav.Link href="/home">My Account</Nav.Link>
                  <Nav.Link eventKey="link-1">My Cart</Nav.Link>
                  <Nav.Link eventKey="link-2">My Coupons</Nav.Link>
                  <Nav.Link eventKey="disabled" disabled>
                    FAQ
                  </Nav.Link>
                </Nav>
              </Col>
              <Col>
                {" "}
                <Nav defaultActiveKey="/home" className="flex-column">
                  <h6 className="head-footer">Merchants</h6>

                  <Nav.Link href="/home">Run a Deal</Nav.Link>
                  <Nav.Link eventKey="link-1">Merchant Centre</Nav.Link>
                </Nav>
              </Col>
              <Col className="send-footer">
                <h6 className="head-footer message">Newsletter Signup</h6>
                <p className="message-text">
                  Sign up for our daily emails and we'll send you all the best
                  deals, tailored for you.
                </p>
                <InputGroup className="mb-3 sn-2">
                <i class="bi bi-envelope em"></i>
                  <Form.Control
                    placeholder="Enter email address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Subscribe
                  </Button>
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </div>
     
      </footer>
      <div className="container-fluid copyright">
          <dev className ="copyright-space">
            <a href="/privacy-policy" className="Privacy">Privacy Policy</a>
            <span>© 2022 GrabOne Limited</span>
          </dev>
        </div>
    </div>
  );
};

export default Footer;

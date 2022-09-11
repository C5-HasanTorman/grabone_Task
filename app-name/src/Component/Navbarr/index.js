import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const Navbarr = () => {
  return (
    <Container fluid  className=" container-fluid p-0 " >
      <Navbar variant="dark" expand="lg" className="p-0 n1">
        <Container fluid="lg" className="cont-max">
          <Navbar.Brand className="title-head" href="#">
            GrabOne
          </Navbar.Brand>
          <div className="pe-xl-5 pe-3 cont-max">
            <Nav className="me-auto my-2 my-lg-0">
              <div className=" ms-xs-auto nav-it">
                <Dropdown className="dropdown">
                  <Dropdown.Toggle className="btn-block">
                    <i class="bi bi-geo-alt"></i>
                    <span> Auckland</span>
                    <i class="bi bi-chevron-down"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Waikato </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Wellington </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Northland </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Manawatu - Wanganui{" "}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3"> Tauranga</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Rotorua - Taupo{" "}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Hawkes Bay Nelson{" "}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Marlborough Dunedin{" "}
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Invercargill{" "}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-none d-lg-flex link-sec">
                <Nav.Link className="d-flex" href="#action2">
                  {" "}
                  <i class="bi bi-heart heart "></i>
                </Nav.Link>

                <Nav.Link className="d-flex" href="#action2">
                  {" "}
                  <i class="bi bi-cart2 heart"></i>
                </Nav.Link>
                <Nav.Link className="d-flex" href="#action2">
                  <Dropdown className="dropdown">
                    <Dropdown.Toggle className="btn-block">
                      <i class="bi bi-person heart"></i>
                      <i class="bi bi-chevron-down heart"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        My Account
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Gifts </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Profile </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        My Subscriptions{" "}
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        My Purchases{" "}
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3"> Logout</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Login </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Link>

                <Nav.Link className="d-flex" href="#action1">
                  {" "}
                  <a
                    className="mail"
                    href="https://www.grabone.co.nz/register?success_url=https%3A%2F%2Fwww.grabone.co.nz%2Fmy-stuff%2Fmy-subscriptions"
                  >
                    <i class="bi bi-envelope heart"></i>
                    Subscribe
                  </a>
                </Nav.Link>
              </div>
            </Nav>
          </div>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="d-none d-lg-block n2">
        <Container>
          <Dropdown className="nav2-block">
            <Dropdown.Toggle>
              Browse Categories
              <i class="bi bi-chevron-down categories"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Waikato </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Wellington </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Northland </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Manawatu - Wanganui{" "}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3"> Tauranga</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Rotorua - Taupo </Dropdown.Item>

              <Dropdown.Item href="#/action-3">Invercargill </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className="link-block" href="#action1">
                What's New
              </Nav.Link>
              <Nav.Link className="link-block" href="#action2">
                Trending
              </Nav.Link>

              <Nav.Link className="link-block" href="#">
                For You
              </Nav.Link>
              <Nav.Link className="link-block" href="#action2">
                Shop Products
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <i class="bi bi-search fa-3x"></i>

              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navbarr;

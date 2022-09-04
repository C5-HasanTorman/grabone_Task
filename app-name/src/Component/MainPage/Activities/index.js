import "./style.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Activities = () => {
  return (
    <div className="container activities-con">
      <section className="deal-sec">
        <header className="deal-head">
          <h2 className="deal-title">Activities, Events & Outdoors </h2>
          <Button variant="info" className="deal-btn">
            <span>View More</span>
            <i class="bi bi-chevron-right"></i>{" "}
          </Button>
        </header>
        <article className="deal-card">
          <Row className="deal-grid">
            <Col>
              {" "}
              <Card className="deal-grid">
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/b66b8a3e8a52670f98b8621b66b3211ebcce3288.jpg"
                />
          <Card.Body>
                  <Card.Title>
                    <header className="top-card">
                      <h5 class="card-text">BasicCare 35-point Service</h5>
                      <p>
                        <span className="name-Stores">
                          Honda Stores Auckland
                        </span>
                      </p>
                    </header>
                  </Card.Title>
                  <Card.Text>
                    <footer className="bottom-card">
                      <p className="from-word">from</p>
                      <span className="price"> $195</span>
                    </footer>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {" "}
              <Card className="deal-grid">
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/554a1998a3b97741a5afc8e3d6a4204eba9d9fee.jpg"
                />
              <Card.Body>
                  <Card.Title>
                    <header className="top-card">
                      <h5 class="card-text">BasicCare 35-point Service</h5>
                      <p>
                        <span className="name-Stores">
                          Honda Stores Auckland
                        </span>
                      </p>
                    </header>
                  </Card.Title>
                  <Card.Text>
                    <footer className="bottom-card">
                      <p className="from-word">from</p>
                      <span className="price"> $195</span>
                    </footer>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="deal-grid">
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/6d597e49c147557c261cc5bbfd877a53959995dc.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    <header className="top-card">
                      <h5 class="card-text">BasicCare 35-point Service</h5>
                      <p>
                        <span className="name-Stores">
                          Honda Stores Auckland
                        </span>
                      </p>
                    </header>
                  </Card.Title>
                  <Card.Text>
                    <footer className="bottom-card">
                      <p className="from-word">from</p>
                      <span className="price"> $195</span>
                    </footer>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="deal-grid">
                <Card.Img
                  variant="top"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/da7eef7857dfcf90e6cdea7c043b79c1ce208e34.jpg"
                />
                   <Card.Body>
                  <Card.Title>
                    <header className="top-card">
                      <h5 class="card-text">BasicCare 35-point Service</h5>
                      <p>
                        <span className="name-Stores">
                          Honda Stores Auckland
                        </span>
                      </p>
                    </header>
                  </Card.Title>
                  <Card.Text>
                    <footer className="bottom-card">
                      <p className="from-word">from</p>
                      <span className="price"> $195</span>
                    </footer>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </article>
      </section>
    </div>
  );
};

export default Activities;

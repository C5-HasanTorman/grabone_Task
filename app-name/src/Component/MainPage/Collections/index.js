import "./style.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Collections = () => {
  return (
    <div className="container collections-con">
      <section className="deal-sec">
        <header className="deal-head">
          <h2 className="deal-title">Collections </h2>
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
                  src="https://mediacdn.grabone.co.nz/asset/i78WKOX1hA"
                  alt="One-Hour Pool Table Game incl. Two Cans of Soft Drink or Two Heineken 0% "
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
                  src="https://mediacdn.grabone.co.nz/asset/liiWFoJ80j"
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
                  src="https://mediacdn.grabone.co.nz/asset/WmNCBypjGB"
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
                  src="https://mediacdn.grabone.co.nz/asset/DKqrqrT4pw"
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

export default Collections;

import "./style.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const House = () => {
  return (
    <div className="container house-con">
      <section className="deal-sec">
        <header className="deal-head">
          <h2 className="deal-title">House & Garden</h2>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/4a3b946a764b874bd63c5daf4c8658bc4eec69c4.jpg"
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/326577d6bf9ecafb75a55c981e195f9d27bc5deb.jpg"
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/b6f8982738fae0179e711a21b2d6fe6f39c44439.jpg"
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/d78d4bff7e79786fea3f2f75727cabe38051ffda.jpg"
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

export default House;

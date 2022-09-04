import "./style.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Deals = () => {
  return (
    <div className="container deal-con">
      <section className="deal-sec">
        <header className="deal-head">
          <h2 className="deal-title">Featured Auckland deals </h2>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/3b8812ae5f8d38f9b3ae3ade3b525c9c6a70897a.jpg"
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
                  alt="Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower & Up to Three Nights with $150 Credit"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"
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
                  alt="Two-Person Boutique Dining & Movie Package incl. Tickets, Pizza, Two Choc Top Ice Creams & Two Glasses of Prosecco, Wine or Beer - Options for up to Eight People"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/45a3bffce1d7d6e2269b487ccec9fd42807c16da.jpg"
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
                  alt="One-Hour Axe Throwing Experience - Option for up to Four People"
                  src="//main-cdn.grabone.co.nz/goimage/325x225/dff22c3d041e983df8f0a3224d4b2e2698674882.png"
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

export default Deals;

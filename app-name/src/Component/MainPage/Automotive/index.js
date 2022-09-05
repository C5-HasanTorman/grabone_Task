import "./style.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Automotive = () => {
  return (
    <div className="container automotive-con">
      <section className="deal-sec">
        <header className="deal-head">
          <h2 className="deal-title">Automotive </h2>
          <Button variant="info" className="deal-btn">
            <span>View More</span>
            <i class="bi bi-chevron-right"></i>
          </Button>
        </header>
        <article className="deal-card">
          <Row className="deal-grid">
            <Col className="product">
              {" "}
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/efc3d8f120a5de7862bc62cfa837745b09d31beb.jpg"
                    alt="One-Hour Pool Table Game incl. Two Cans of Soft Drink or Two Heineken 0% "
                  />
                  <figcaption>
                    <p> 2M Golf Cage Tent - Two Colours Available</p>
                  </figcaption>
                </figure>

                <Card.Body>
                  <Card.Title>
                    <header className="top-card">
                      <h5 class="card-text">HIFU Treatment Package</h5>
                      <div className="text-cont">
                        <p>
                          {" "}
                          <span className="name-Stores">
                            Honda Stores Auckland
                          </span>
                        </p>

                        <p>
                          {" "}
                          <span className="name-ops ">Auckland </span>
                        </p>
                      </div>
                    </header>
                  </Card.Title>
                  <Card.Text>
                    <footer className="bottom-card">
                      <div className="text-end">
                        <span className="name-ops">6 bought</span>
                      </div>
                      <div className="text-right">
                        <p className="from-word">from</p>
                        <div>
                          <span className="name-ops line-th">$99</span>
                          <span className="price"> $195</span>
                        </div>
                      </div>
                    </footer>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="product">
              {" "}
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    alt="Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower & Up to Three Nights with $150 Credit"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/014a2ab9b2b3c015090f955caf2839a526bbc2c3.jpg"
                  />
                  <figcaption>
                    <p> 2M Golf Cage Tent - Two Colours Available</p>
                  </figcaption>
                </figure>

                <Card.Body>
                  <Card.Title>
                    <header className="top-card">
                      <h5 class="card-text">HIFU Treatment Package</h5>
                      <div className="text-cont">
                        <p>
                          {" "}
                          <span className="name-Stores">
                            Honda Stores Auckland
                          </span>
                        </p>

                        <p>
                          {" "}
                          <span className="name-ops">Auckland </span>
                        </p>
                      </div>
                    </header>
                  </Card.Title>
                  <Card.Text>
                    <footer className="bottom-card">
                      <div className="text-end">
                        <span className="name-ops">6 bought</span>
                      </div>
                      <div className="text-right">
                        <p className="from-word">from</p>
                        <div>
                          <span className="name-ops line-th">$99</span>
                          <span className="price"> $195</span>
                        </div>
                      </div>
                    </footer>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="product">
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/13cc0c5181f1533d54956a32bb733e2792b18cf6.jpg"
                    alt="One-Hour Pool Table Game incl. Two Cans of Soft Drink or Two Heineken 0% "
                  />
                  <figcaption>
                    <p> 2M Golf Cage Tent - Two Colours Available</p>
                  </figcaption>
                </figure>

                <Card.Body>
                  <Card.Title>
                    <header className="top-card">
                      <h5 class="card-text">HIFU Treatment Package</h5>
                      <div className="text-cont">
                        <p>
                          {" "}
                          <span className="name-Stores">
                            Honda Stores Auckland
                          </span>
                        </p>

                        <p>
                          {" "}
                          <span className="name-ops">Auckland </span>
                        </p>
                      </div>
                    </header>
                  </Card.Title>
                  <Card.Text>
                    <footer className="bottom-card">
                      <div className="text-end">
                        <span className="name-ops">6 bought</span>
                      </div>
                      <div className="text-right">
                        <p className="from-word">from</p>
                        <div>
                          <span className="name-ops line-th">$99</span>
                          <span className="price"> $195</span>
                        </div>
                      </div>
                    </footer>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="product">
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/654fddff040fb7631293be6497a3c74bb4fb42ac.jpg"
                    alt="One-Hour Pool Table Game incl. Two Cans of Soft Drink or Two Heineken 0% "
                  />
                  <figcaption>
                    <p> 2M Golf Cage Tent - Two Colours Available</p>
                  </figcaption>
                </figure>

                <Card.Body>
                  <Card.Title>
                    <header className="top-card">
                      <h5 class="card-text">HIFU Treatment Package</h5>
                      <div className="text-cont">
                        <p>
                          {" "}
                          <span className="name-Stores">
                            Honda Stores Auckland
                          </span>
                        </p>

                        <p>
                          {" "}
                          <span className="name-ops">Auckland </span>
                        </p>
                      </div>
                    </header>
                  </Card.Title>
                  <Card.Text>
                    <footer className="bottom-card">
                      <div className="text-end">
                        <span className="name-ops">6 bought</span>
                      </div>
                      <div className="text-right">
                        <p className="from-word">from</p>
                        <div>
                          <span className="name-ops line-th">$99</span>
                          <span className="price"> $195</span>
                        </div>
                      </div>
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

export default Automotive;

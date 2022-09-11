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
            <i class="bi bi-chevron-right"></i>
          </Button>
        </header>
        <article className="deal-card">
          <Row className="d-md-flex deal-grid">
            <Col md="6" lg={"3"}  className="product">
              {" "}
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    src="https://mediacdn.grabone.co.nz/asset/i78WKOX1hA"
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
            <Col md="6" lg={"3"}  className="product">
              {" "}
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    alt="Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower & Up to Three Nights with $150 Credit"
                    src="https://mediacdn.grabone.co.nz/asset/liiWFoJ80j"
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
            <Col md="6" lg={"3"}  className="product">
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    alt="Two-Person Boutique Dining & Movie Package incl. Tickets, Pizza, Two Choc Top Ice Creams & Two Glasses of Prosecco, Wine or Beer - Options for up to Eight People"
                    src="https://mediacdn.grabone.co.nz/asset/WmNCBypjGB"
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
            <Col md="6" lg={"3"}  className="product">
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    alt="One-Hour Axe Throwing Experience - Option for up to Four People"
                    src="https://mediacdn.grabone.co.nz/asset/DKqrqrT4pw"
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

export default Collections;

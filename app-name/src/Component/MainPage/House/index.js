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
                    src="//main-cdn.grabone.co.nz/goimage/325x225/69c03aee5e73aa4a8fa8fa537715c9bcc3bd612a.jpg"
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
                    src="//main-cdn.grabone.co.nz/goimage/325x225/7e5da04f569a5486fa1ac21f1d041408f2b98a8e.jpg"
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
                    alt="Two-Person Boutique Dining & Movie Package incl. Tickets, Pizza, Two Choc Top Ice Creams & Two Glasses of Prosecco, Wine or Beer - Options for up to Eight People"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/f493a090d3f2a65c849144dbe8bb07e6d47fd414.jpg"
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
                    alt="One-Hour Axe Throwing Experience - Option for up to Four People"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/79a4e450ac90c9ebfcaea57a7f2db96e76425368.jpg"
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

export default House;

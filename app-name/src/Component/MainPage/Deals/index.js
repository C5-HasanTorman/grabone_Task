import "./style.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Deals = () => {
  return (
    <div className="container deal-con cont">
      <section className="deal-sec">
        <header className="deal-head">
          <h2 className="deal-title">Featured Auckland deals </h2>
          <Button variant="info" className="deal-btn">
            <span>View More</span>
            <i class="bi bi-chevron-right"></i>
          </Button>
        </header>
        <article className="deal-card">
          <Row className="deal-grid">
            <Col md="auto" className="product">
              {" "}
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/dfcf94ebb30d8e74723c0d8bc6c0ba815dcaeed5.jpg "
                    alt="One-Hour Pool Table Game incl. Two Cans of Soft Drink or Two Heineken 0% "
                  />
                  <figcaption>
                    <p>
                      {" "}
                      Two-Person Boutique Dining & Movie Package incl. Tickets,
                      Pizza, Two Choc Top Ice Creams & Two Glasses of Prosecco,
                      Wine or Beer - Options for up to Eight People
                    </p>
                  </figcaption>
                </figure>

                <Card.Body>
                  <Card.Title>
                    <header className="top-card">
                      <h5 class="card-text">Boutique Dining </h5>
                      <div className="text-cont">
                        <p>
                          {" "}
                          <span className="name-Stores">
                            Monterey Cinemas Takapuna
                          </span>
                        </p>

                        <p>
                          {" "}
                          <span className="name-ops ">Takapuna </span>
                        </p>
                      </div>
                    </header>
                  </Card.Title>
                  <Card.Text>
                    <footer className="bottom-card">
                      <div className="text-end">
                        <span className="name-ops">364 bought</span>
                      </div>
                      <div className="text-right">
                        <p className="from-word">from</p>
                        <div>
                          <span className="name-ops line-th">$49</span>
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
                    src="//main-cdn.grabone.co.nz/goimage/325x225/384a963932ad1eae27aa16e7f54b06e90cae3d44.jpg"
                  />
                  <figcaption>
                    <p>
                      Matariki Deal – One-Night Auckland CBD Stay for Two in a
                      Superior Room at Mercure Hotel Queen Street incl. Early
                      Check-In, Late Checkout, & Bottle of Bubbles – Options for
                      Two Nights, Midweek or We...
                    </p>
                  </figcaption>
                </figure>

                <Card.Body>
                  <Card.Title>
                    <header className="top-card">
                      <h5 class="card-text">4-Star CBD Auckland </h5>
                      <div className="text-cont">
                        <p>
                          {" "}
                          <span className="name-Stores">
                            Mercure Hotel Queen Street{" "}
                          </span>
                        </p>

                        <p>
                          {" "}
                          <span className="name-ops">Auckland Central </span>
                        </p>
                      </div>
                    </header>
                  </Card.Title>
                  <Card.Text>
                    <footer className="bottom-card">
                      <div className="text-end">
                        <span className="name-ops">249 bought</span>
                      </div>
                      <div className="text-right">
                        <p className="from-word">from</p>
                        <div>
                          <span className="name-ops line-th">$179</span>
                          <span className="price"> $195</span>
                        </div>
                      </div>
                    </footer>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto" className="product">
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    alt="Two-Person Boutique Dining & Movie Package incl. Tickets, Pizza, Two Choc Top Ice Creams & Two Glasses of Prosecco, Wine or Beer - Options for up to Eight People"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/45a3bffce1d7d6e2269b487ccec9fd42807c16da.jpg"
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
            <Col md="auto" className="product">
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    alt="One-Hour Axe Throwing Experience - Option for up to Four People"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/4e878fd70b0766c99669fc3e1a510a30a75827ca.jpg"
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
            <Col md="auto" className="product">
              {" "}
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    alt="Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower & Up to Three Nights with $150 Credit"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/62eb86730ba65ee45c1d77b863f876308ca5df8d.jpg"
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
            <Col md="auto" className="product">
              {" "}
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    alt="Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower & Up to Three Nights with $150 Credit"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/b66b8a3e8a52670f98b8621b66b3211ebcce3288.jpg"
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
            <Col md="auto" className="product">
              {" "}
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    alt="Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower & Up to Three Nights with $150 Credit"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/8dfb9d97b6a761931edbb3c0e39e38ed70cb7274.jpg"
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
            <Col md="auto" className="product">
              {" "}
              <Card className="deal-gri">
                <figure>
                  <Card.Img
                    variant="top"
                    alt="Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower & Up to Three Nights with $150 Credit"
                    src="//main-cdn.grabone.co.nz/goimage/325x225/63b7eb1e3b90fd87c7d876b29810cb58d478226c.jpg"
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

export default Deals;

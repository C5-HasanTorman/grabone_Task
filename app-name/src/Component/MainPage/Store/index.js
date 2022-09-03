import "./style.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Store = () => {
  return (
    <div className="container store-con">
      <section className="deal-sec">
        <header className="deal-head">
            
          <h2 className="deal-title">Store</h2>
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
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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

export default Store;

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
                  src="https://mediacdn.grabone.co.nz/asset/liiWFoJ80j"
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
                  src="https://mediacdn.grabone.co.nz/asset/WmNCBypjGB"
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
                  src="https://mediacdn.grabone.co.nz/asset/DKqrqrT4pw"
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

export default Collections;

import "./style.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Escapes = () => {
  return (
    <div className="container escapes-con">
      <section className="deal-sec">
        <header className="deal-head">
          <h2 className="deal-title">Escapes</h2>
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/326577d6bf9ecafb75a55c981e195f9d27bc5deb.jpg"
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/b6f8982738fae0179e711a21b2d6fe6f39c44439.jpg"
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
                  src="//main-cdn.grabone.co.nz/goimage/325x225/d78d4bff7e79786fea3f2f75727cabe38051ffda.jpg"
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

export default Escapes;

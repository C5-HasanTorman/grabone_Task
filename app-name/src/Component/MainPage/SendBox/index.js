import "./style.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SendBox = () => {
  return (
    <div className="container send-box">
      <div className="inner-con">
        <header className="head-send">
          <span className="title-send">
            Get the best deals delivered direct to your inbox each day
          </span>
        </header>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter email address"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Subscribe
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default SendBox;

import { Col, Row, Card, Button, Avatar, Image } from "antd";
import React from "react";
import "antd/dist/antd.css";
import "../Cards/Cards.css";
import img1 from "../Images/L1.svg";
type cardtype = {
  title: string;
  description: string;
  info1: string;
  info2: string;
  image: string;
};
const Cards = (props: cardtype) => (
  <Row>
    <Col xs={24} sm={24} md={24} lg={12} xl={8}>
      <div className="site-card-border-less-wrapper ">
        <Card className="card-width">
          <div className="card-one">
            <div style={{ marginRight: "30px" }}>
              <img src={props.image} width={40} className="avatar"></img>
            </div>

            <div className="cardhover1">
              <span className="title">{props.title}</span>
              <br></br>
              <span className="description"> {props.description}</span>
              <br></br>
              <br></br>
              <p className="info1">{props.info1}</p>
            </div>
          </div>
          <div className="hover-effect">
            <span className="hover-effect-para">{props.info2}</span>
            <br></br>
            <Button type="primary">View Details</Button>
          </div>
        </Card>
      </div>
    </Col>
  </Row>
);

export default Cards;

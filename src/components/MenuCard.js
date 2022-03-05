import React, { memo } from "react";
import "../App.css";
import {
  Card,
  CardTitle,
  Button,
  CardHeader,
  CardText,
  CardBody,
  Row,
  Col,
} from "reactstrap";

const MenuCard = ({ menu }) => {
  return (
    <Row>
      {menu.map((data) => {
        const { id, category, image, name, description } = data;
        return (
          <Col md={4} key={id}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h4 className="text-capitalize">{category}</h4>
                </CardTitle>
                <div className="design-image">
                  <img src={image} width="100%" alt="Card image cap" />
                </div>
              </CardHeader>

              <CardBody>
                <h6>{name}</h6>
                <CardText>{description}</CardText>
                <Button color="warning">Order Now</Button>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default MenuCard;

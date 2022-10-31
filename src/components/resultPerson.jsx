import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ResultPerson = (props) => {
  const { setNextPage } = props;

  const changePage = () => {
    setNextPage(false);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <h5> Información básica</h5>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Form.Group>
            <Form.Label className="text">Primer apellido</Form.Label>
            <Form.Control
              placeholder={"Perez"}
              disabled
              style={{ width: "50%" }}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Form.Group>
            <Form.Label className="text">Primer nombre</Form.Label>
            <Form.Control
              placeholder={"Miguel"}
              disabled
              style={{ width: "50%" }}
            />
          </Form.Group>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Button
            size="lg"
            variant="primary"
            style={{
              backgroundColor: "#052d75",
              border: "1px solid #052d75",
              borderRadius: "25px",
              width: "250px",
            }}
            onClick={changePage}
          >
            Atras
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
ResultPerson.propTypes = {
  setNextPage: PropTypes.func.isRequired,
};
export default ResultPerson;

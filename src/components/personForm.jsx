import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import { formSchema } from "../utils/validation/formRules";

const PersonForm = (props) => {
  const { setNextPage } = props;
  const [isDisabled, setIsDisabled] = useState(true);

  const consultPerson = () => {
    setNextPage(true);
  };

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      documentType: "",
      document: "",
    },
    validationSchema: formSchema,
    validateOnChange: false,
    onSubmit: consultPerson,
  });

  useEffect(() => {
    if (values.document && values.documentType != "") {
      setIsDisabled(false);
    }
  }, [values]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <p className="textSecondary">Todos los campos son obligatorios</p>
        </Col>
        <Col xs={12} md={10}>
          <Form.Label className="text">Tipo de documento</Form.Label>
        </Col>
        <Col xs={12} md={10}>
          <Form.Select
            id="documentType"
            name="documentType"
            value={values.documentType || ""}
            onChange={handleChange}
            style={{ width: "50%" }}
          >
            <option value=""></option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="PS">Pasaporte</option>
          </Form.Select>
          {errors.documentType && (
            <p className="textError">{errors.documentType}</p>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Form.Label className="text">Número de documento</Form.Label>
        </Col>
        <Col xs={12} md={10}>
          <Form.Control
            type="text"
            id="document"
            name="document"
            value={values.document || ""}
            onChange={handleChange}
            required
            style={{ width: "50%" }}
          />
          {errors.document && <p className="textError">{errors.document}</p>}
        </Col>
      </Row>
      <br />
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Button
            style={
              isDisabled
                ? {
                    backgroundColor: "#dce4e4",
                    border: "1px solid #dce4e4",
                    borderRadius: "25px",
                    width: "250px",
                    color: "#B0B0B0",
                  }
                : {
                    backgroundColor: "#052d75",
                    border: "1px solid #052d75",
                    borderRadius: "25px",
                    width: "250px",
                  }
            }
            variant="primary"
            size="lg"
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Buscar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

PersonForm.propTypes = {
  setNextPage: PropTypes.func.isRequired,
};

export default PersonForm;

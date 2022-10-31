import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonForm from "./components/personForm";
import Header from "./components/header";
import ResultPerson from "./components/resultPerson";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  const [nextPage, setNextPage] = useState(false);

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row className="rowContainer" >{!nextPage && <PersonForm setNextPage={setNextPage} />}</Row>
      <Row className="rowContainer" >{nextPage && <ResultPerson setNextPage={setNextPage} />}</Row>
    </Container>
  );
}

export default App;

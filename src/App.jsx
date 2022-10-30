import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonForm from "./components/personForm";
import Header from "./components/header";
import ResultPerson from "./components/resultPerson";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {
  const [nextPage, setNextPage] = useState(false);

  return (
    // <div className="App">
      <Container fluid >
        <Row  >
      <Header />
      </Row>
      <Row className="justify-content-center">
      {!nextPage && <PersonForm setNextPage={setNextPage} />}
      </Row>
      <br />
      <Row className="justify-content-center">
      {nextPage && <ResultPerson setNextPage={setNextPage} />}
      </Row>
      </Container>
    //</div>
  );
}

export default App;

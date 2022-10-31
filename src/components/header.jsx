import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Consultar persona</Navbar.Brand>
    </Container>
  </Navbar>
  );
};

export default Header;

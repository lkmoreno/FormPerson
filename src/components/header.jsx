import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar  bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Consultar persona</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

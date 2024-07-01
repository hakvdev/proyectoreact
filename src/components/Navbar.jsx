import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarHome = () => {
  return (
    <>
      <Navbar className="mb-3"bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Mi web de Animalitos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/other">Others</Nav.Link>
            <Nav.Link href="/proyects">Proyects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
)}

export default NavbarHome
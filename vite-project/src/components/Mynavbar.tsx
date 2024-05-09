import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Mynavbar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home </Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Mynavbar
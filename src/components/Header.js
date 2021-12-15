import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"

const Header = () => {
    return (
      <header className = "header">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Home Security Expert System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/expert">Start New Quiz</Nav.Link>
                <NavDropdown title="Get Info" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Expert System</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Home Security</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Developers</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br/>
      </header>
    )
}

export default Header

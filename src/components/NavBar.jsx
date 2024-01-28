import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">National Team</Nav.Link>
                        <Nav.Link href="#pricing">Schools League</Nav.Link>
                        <Nav.Link href="#pricing">Calendar</Nav.Link>
                        <Nav.Link href="#pricing">Announcements</Nav.Link>
                        <Nav.Link href="#pricing">Information</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;
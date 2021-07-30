import Navbar from './Navbar.js';
import ContactForm from './ContactForm.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contact = () => {
  return (
    <>
      <Navbar hasSearch={false} />

      <Container>
        <Row className="mt-5 mb-5">
          <Col>
            <h1>Kontaktirajte nas za više informacija <hr/></h1>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact

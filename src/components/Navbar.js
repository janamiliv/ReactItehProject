import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Example = ({ onSearch, hasSearch }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Naočare za sunce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Početna strana</Nav.Link>
            <Nav.Link href="/contact">Kontakt</Nav.Link>
          </Nav>
          {hasSearch ? <Form inline>
            <FormControl onChange={(e) => { onSearch(e.target.value) }} type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Pretraga</Button>
          </Form> : ''}

        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Example;
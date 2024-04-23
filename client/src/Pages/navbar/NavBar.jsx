import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navBar.scss';

const NavDivider = () => <hr className="navdivider" />;

const NavBar = () => {
    return (
        <div className='container'>
            <Navbar style={{ backgroundColor: 'rgb(0,94,165)' }} expand="lg" className='navBar'>
                <Container>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto  my-lg-0"
                            style={{ maxHeight: '100px', gap: '25px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <NavDivider />
                            {/* <Nav.Link href="#action2">About Us</Nav.Link> */}
                            <NavDropdown title="About Us" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Profiles</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">
                                    PSP Division
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Passport Seva
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDivider />

                            <NavDropdown title="Passport Offices" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Passport Offices in India</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">
                                    Mission/Post Abroad
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1">RTI</Nav.Link>
                            <Nav.Link href="#action1">Citizens' Charter</Nav.Link>
                            <NavDropdown title="Contact Us" id="navbarScrollingDropdown">
                                <NavDropdown className='dropend' title='Passport'>
                                    <NavDropdown.Item className="dropdown-item" href="#action4">
                                        General Information
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="dropdown-item" href="#action4">
                                        Chief Passport Officer
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="dropdown-item" href="#action4">
                                        Passport Offices
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="dropdown-item" href="#action4">
                                        Vigilance Unit
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown.Item href="#action4">
                                    Visa Services
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">
                                    Consular / Visa
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1">What's New</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar

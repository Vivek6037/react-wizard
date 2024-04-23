import { Container, Row, Col, NavLink } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaAngleDown } from "react-icons/fa";
import { TbCherryFilled } from "react-icons/tb";
import Link from 'react-bootstrap/NavLink';
import { FaAngleRight } from "react-icons/fa";

function Header() {
    return (
        <>
            <div className='sticky'>
                <Navbar expand="lg" className='navbar'>
                    <Container fluid>
                        <Navbar.Brand href="/home" className='d-flex align-items-center'>
                            <TbCherryFilled className='cherry' /><h3 className='fw-bold ms-1'>hazard</h3>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="my-2 my-lg-0 ms-auto"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/game" className='text-black menu  me-2'>Games</Nav.Link>
                                <Nav.Link href="#" className='text-black menu me-2'>Promotions</Nav.Link>
                                <Nav.Link href="/about" className='text-black menu me-2'>About</Nav.Link>
                                <Nav.Link href="/blog" className='text-black menu me-2'>Blog </Nav.Link>
                                <Nav.Link href="#" className='text-black menu me-2'>Get in touch</Nav.Link>
                                <Nav.Link href="#" className='text-black menu'>Pages<FaAngleDown className='text-secondary down ms-1' />
                                <ul className='sub-menu'>
                                    <Nav.Link href='#' className='sub-menu_a text-black'><FaAngleRight className='arrright'/>Single Game</Nav.Link>
                                   <Nav.Link href='/payment' className='sub-menu_a text-black'><FaAngleRight className='arrright'/>Payment</Nav.Link>
                                    <Nav.Link href="/faq" className='sub-menu_a text-black'><FaAngleRight className='arrright'/>FAQ</Nav.Link>
                                </ul>
                                </Nav.Link>
                                




                                {/* <ul className='sub-menu'>
                                    <li><a href='#' className='sub-menu_a text-black'><FaAngleRight className='arrright'/>Single Game</a></li>
                                    <li><a href='/payment' className='sub-menu_a text-black'><FaAngleRight className='arrright'/>Payment</a></li>
                                    <li><Link to='/faq' className='sub-menu_a text-black'><FaAngleRight className='arrright'/> FAQ</Link></li>
                                </ul> */}
                                
                                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
                            </Nav>
                            <Form className="d-flex ms-auto">
                                <Button className='login_header me-2'>
                                    <a href="#" className='text-white fw-bold'>Login</a>
                                </Button>
                                <Button className='register_header'>
                                    <a href="#" className='text-white fw-bold'>Register</a>
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
};

export default Header
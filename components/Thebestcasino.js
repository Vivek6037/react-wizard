import { Container, Row, Col, NavLink } from 'react-bootstrap';
import { IoMdCheckmark } from "react-icons/io";


function Thebestcasino() {
    return (
        <>
            <div className="the_best_casino_game spacer py-5">
                <Container fluid>
                    <Row>
                        <Col>
                            <h1 className='text-white mt-5'>The best casino gambling experience online</h1>
                        </Col>
                    </Row>
                    <Row className='pb-5 row-cols-1 row-cols-lg-2'>
                        <Col className='the_best_cols'>
                            <p className='text-secondary fs-5 mt-4'>We believe the best casino games are the ones you love to play the most. That’s why at Hazard, we provide a wide variety of those. The games offer include slots, roulettes, card games, and many others.</p>
                            <p className='text-secondary fs-5 mt-1 mb-5'>We regularly update our games and add new ones to make your stay at your online casino worth your time and money spent here.</p>
                            <a href="#" className='btn-our'>
                                <button className='border-0 rounded-5  text-white fw-bold'>Our story</button>
                            </a>
                        </Col>
                        <Col className='the_best_cols'>
                            <p className='text-white fs-5 mt-4'><IoMdCheckmark className='mark fs-1' />We aim to help our players win more by providing certified advice in gambling as well as cutting edge games and learning tools.</p>
                            <p className='text-white fs-5'><IoMdCheckmark className='mark fs-1' />All our games are verified and approved by state regulators.</p>
                            <p className='text-white fs-5'><IoMdCheckmark className='mark fs-1' />On our website, we guarantee easy deposit and withdrawal options.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Thebestcasino
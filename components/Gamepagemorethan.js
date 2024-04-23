import { Container, Row, Col, NavLink } from 'react-bootstrap';

function Gamepagemorethan() {
    return (
        <>
            <div className="more_than_thirtper_section text-white py-5">
                <Container fluid>
                    <Row>
                        <Col><h1 className='mt-5'>More than 30% welcome bonus</h1></Col>
                    </Row>
                    <Row>
                        <Col><h1>up to $1.000</h1></Col>
                        <Col className='d-flex justify-content-end me-5'>
                            <a href="#" className='letsplay'>
                                <button className='text-white fw-bold rounded-5'>Let's play!</button>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="promo_code d-flex mt-5">
                                <p className='text-white me-1'>Promo code:</p>
                                <h6 className='text-white fw-bold mt-1'>WELCOME</h6>
                            </div>
                            <p className='text-white fs-5'>100% up to $1.000. plus 35% bonus on every reload</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Gamepagemorethan
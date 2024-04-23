import { Container, Row, Col, NavLink } from 'react-bootstrap';

function Aboutpageyoursecurity() {
    return (
        <>
            <div className="your_security_section spacer">
                <Container fluid>
                    <Row>
                        <Col className='your_security_heading'><h1>Your security is important to us</h1></Col>
                    </Row>
                    <Row>
                        <Col className='your_security_p'><p className='text-secondary fs-5 mt-4 w-50 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue nisl neque, sagittis pretium justo egestas sed.</p></Col>
                    </Row>
                    <Row className='row-cols-1 row-cols-lg-2 row-cols-md-2'>
                        <Col>
                            <h4 className='fw-bold mb-4'>Our principles</h4>
                            <p className='text-secondary fs-5'>Maecenas vitae placerat orci, at euismod mauris. Nullam blandit, massa at vulputate vehicula, justo libero semper velit, id cursus enim odio vitae augue. Duis porttitor elit eget mi convallis, vel vulputate ipsum cursus. Ut sit amet tristique dolor. In viverra faucibus orci, at posuere dolor sagittis id. Maecenas massa risus, euismod quis ligula a, rutru.</p>
                            <p className='text-secondary fs-5'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus id velit elit. Fusce eu tempor risus.</p>
                        </Col>
                        <Col>
                            <h4 className='fw-bold mb-4'>Our guarantees</h4>
                            <p className='text-secondary fs-5'>Phasellus pulvinar nunc sit amet elit auctor, quis tristique justo mollis. Orci varius natoque penatibus et magnis dis parturient montes.</p>
                            <p className='text-secondary fs-5'>Aenean lacinia magna id libero eleifend finibus. Aliquam maximus, risus eu scelerisque blandit, est mi hendrerit ex, feugiat posuere diam dui ac risus.</p>
                            <div className="your_security_button mt-5">
                                <a href="#">
                                    <button className='fw-bold text-white rounded-5'>Contact us</button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Aboutpageyoursecurity
import { Container, Row, Col } from 'react-bootstrap';
import { IoMdCheckmark } from "react-icons/io";


function Paymentpagepaymentoption() {
    return (
        <>
            <div className="payment_option_section spacer">
                <Container fluid>
                    <Row>
                        <Col><h1 className='fw-bold mb-5'>Payment options</h1></Col>
                    </Row>
                    <Row>
                        <Col><p className='fs-5 mb-5'>Aliquam eu libero quis. Purus consequat gravida congue a magna.</p></Col>
                    </Row>
                    <Row>
                        <Col className='payment_section_a col-3'>
                            <a href="#" className='active text-black fs-4 fw-bold'>Apple Pay</a> <br />
                            <a href="#" className='text-black fs-4 fw-bold text-left'>Card deposit</a><br />
                            <a href="#" className='text-black fs-4 fw-bold'>Paysafecard</a><br />
                            <a href="#" className='text-black fs-4 fw-bold'>Paypal</a><br />
                            <a href="#" className='text-black fs-4 fw-bold'>Visa / Mastercard</a><br />
                            <a href="#" className='text-black fs-4 fw-bold'>Maestro</a><br />
                            <a href="#" className='text-black fs-4 fw-bold'>QIWI Wallet</a><br />
                            <a href="#" className='text-black fs-4 fw-bold'>Sofort</a><br />
                            <a href="#" className='text-black fs-4 fw-bold'>Skrill</a><br />
                        </Col>
                        <Col className='col-8'>
                            <h3 className='fw-bold mb-5'
                            >Apple Pay</h3>
                            <p className='fs-5 mb-4'>Maecenas vitae placerat orci, at euismod mauris. Nullam blandit, massa at vulputate vehicula, justo libero semper velit, id cursus enim odio vitae augue. Duis porttitor elit eget mi convallis, vel vulputate ipsum cursus. Ut sit amet tristique dolor. In viverra faucibus orci, at posuere dolor sagittis id. Maecenas massa risus, euismod quis ligula a, rutru.</p>
                            <p className='fs-5 mb-4'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus id velit elit. Fusce eu tempor risus.</p>
                            <div className="mark_para d-flex">
                                <div className="mark">
                                    <IoMdCheckmark className='fs-3' />
                                </div>
                                <p className='fs-5'>Proin quis sagittis tellus. Curabitur vestibulum mi augue. Maecenas porttitor eleifend quam ultrices porttitor.</p>
                            </div>
                            <div className="mark_para d-flex">
                                <div className="mark">
                                    <IoMdCheckmark className='fs-3' />
                                </div>
                                <p className='fs-5'>Curabitur vestibulum mi augue. Maecenas porttitor eleifend.</p>
                            </div>
                            <div className="mark_para d-flex">
                                <div className="mark">
                                    <IoMdCheckmark className='fs-3' />
                                </div>
                                <p className='fs-5'>Mauris consectetur leo viverra mi dapibus finibus.</p>
                            </div>
                            <p className='fs-5'>Nullam blandit, massa at vulputate vehicula, justo libero semper velit, id cursus enim odio vitae augue. Duis porttitor elit eget mi convallis, vel vulputate ipsum cursus. Ut sit amet tristique dolor. In viverra faucibus orci, at posuere dolor sagittis id. Maecenas massa risus, euismod quis ligula a, rutru.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Paymentpagepaymentoption
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import { IoMdCheckmark } from "react-icons/io";


function FAQpagequesans() {
    return (
        <>
            <div className="question_ans_section spacer">
                <Container fluid>
                    <Row>
                        <Col><h1 className='fw-bold'>Question & Answers</h1></Col>
                    </Row>
                    <Row>
                        <Col><h2 className='mt-4 fw-bold fs-1'>General questions</h2></Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className='mt-5 fw-bold'>What age do you need to be to gamble online?</h4>
                            <p className='mt-4'>Praesent nec pulvinar diam, ut convallis libero. Sed tempor vehicula volutpat. Nullam varius aliquam dapibus. Fusce cursus risus ac aliquam congue. Ut vitae vulputate augue, sed rutrum lectus. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            <h4 className='mt-5 fw-bold'>What kinds of games are available?</h4>
                            <p className='mt-4 mb-3'>Aliquam vel nulla in massa cursus vulputate id at orci. Nunc egestas magna at nunc gravida, sed varius turpis tincidunt. Integer sollicitudin erat a odio condimentum condimentum.</p>
                            <div className="mark_para d-flex">
                                <div className="mark">
                                    <IoMdCheckmark className='fs-3' />
                                </div>
                                <p className='fs-5'>Donec malesuada lobortis augue nec euismod</p>
                            </div><div className="mark_para d-flex">
                                <div className="mark">
                                    <IoMdCheckmark className='fs-3' />
                                </div>
                                <p className='fs-5'>Curabitur rutrum lacus sit amet ex</p>
                            </div>
                            <div className="mark_para d-flex">
                                <div className="mark">
                                    <IoMdCheckmark className='fs-3' />
                                </div>
                                <p className='fs-5'>Aenean laoreet feugiat odio ut dignissim</p>
                            </div>
                            <h4 className='fw-bold mt-4'>When can I withdraw my bonus money?</h4>
                            <p className='mt-4 border-bottom pb-5'>Donec in dolor lacinia magna dapibus congue at in erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tempor eu urna et facilisis.</p>
                            <h2 className='mt-5 fw-bold mb-5' style={{ fontSize: '50px' }}>Other questions</h2>
                            <h4 className='fw-bold mt-4'>What is a welcome bonus?</h4>
                            <p className='mt-4'>Praesent nec pulvinar diam, ut convallis libero. Sed tempor vehicula volutpat. Nullam varius aliquam dapibus. Fusce cursus risus ac aliquam congue. Ut vitae vulputate augue, sed rutrum lectus. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                            <h4 className='fw-bold mt-5'>What's a no deposit bonus?</h4>
                            <p className='mt-4'>Donec in dolor lacinia magna dapibus congue at in erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tempor eu urna et facilisis.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default FAQpagequesans
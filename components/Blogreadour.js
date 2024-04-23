import { Container, Row, Col } from 'react-bootstrap';
import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";

function Blogreadour() {
    return (
        <>
            <div className="read_our_latest_article mt-4">
                <Container fluid>
                    <Row>
                        <Col>
                            <h1 className='fw-bold'>Read our latest articles tips & news</h1>
                        </Col>
                    </Row>
                    <Row className='mt-5 mb-5 row-cols-1 row-cols-lg-3 row-cols-md-2'>
                        <Col className='mb-5'>
                            <div className="latest_img">
                                <img src={require('./image/latest1.jpg')} alt="" />
                            </div>
                            <div className="latest_img_user_details d-flex align-items-center mt-4 mb-3">
                                <FaRegUser className='me-2' />
                                <a href="#" className='text-black me-4'>Adam Smith</a>
                                <FaRegClock className='me-2' />
                                <a>September 16, 2023</a>
                            </div>
                            <div className="online_casinos">
                                <a href="#" className='text-black fs-4 fw-bold'>Online Casinos and Land-Based Casinos Compared</a>
                                <p className='mt-3'>Non amet convallis feugiat nisl eget lacus. Mus sed ornare massa proin ante consequat sed.</p>
                            </div>
                            <div className="latest_button mt-5">
                                <a href="#">
                                    <button className='rounded-5 text-white fw-bold'> Read more</button>
                                </a>
                                <FaRegCommentAlt className='ms-4 me-2' /><a href="#" className='text-black'>25</a>
                            </div>
                        </Col>
                        <Col className='mb-5'>
                            <div className="latest_img">
                                <img src={require('./image/latest2.jpg')} alt="" />
                            </div>
                            <div className="latest_img_user_details d-flex align-items-center mt-4 mb-3">
                                <FaRegUser className='me-2' />
                                <a href="#" className='text-black me-4'>Adam Smith</a>
                                <FaRegClock className='me-2' />
                                <a>September 16, 2023</a>
                            </div>
                            <div className="online_casinos">
                                <a href="#" className='text-black fs-4 fw-bold'>Online Casinos and Land-Based Casinos Compared</a>
                                <p className='mt-3'>Non amet convallis feugiat nisl eget lacus. Mus sed ornare massa proin ante consequat sed.</p>
                            </div>
                            <div className="latest_button mt-5">
                                <a href="#">
                                    <button className='rounded-5 text-white fw-bold'> Read more</button>
                                </a>
                                <FaRegCommentAlt className='ms-4 me-2' /><a href="#" className='text-black'>25</a>
                            </div>
                        </Col>
                        <Col className='mb-5'>
                            <div className="latest_img">
                                <img src={require('./image/latest3.jpg')} alt="" />
                            </div>
                            <div className="latest_img_user_details d-flex align-items-center mt-4 mb-3">
                                <FaRegUser className='me-2' />
                                <a href="#" className='text-black me-4'>Adam Smith</a>
                                <FaRegClock className='me-2' />
                                <a>September 16, 2023</a>
                            </div>
                            <div className="online_casinos">
                                <a href="#" className='text-black fs-4 fw-bold'>Online Casinos and Land-Based Casinos Compared</a>
                                <p className='mt-3'>Non amet convallis feugiat nisl eget lacus. Mus sed ornare massa proin ante consequat sed.</p>
                            </div>
                            <div className="latest_button mt-5">
                                <a href="#">
                                    <button className='rounded-5 text-white fw-bold'> Read more</button>
                                </a>
                                <FaRegCommentAlt className='ms-4 me-2' /><a href="#" className='text-black'>25</a>
                            </div>
                        </Col>
                        <Col className='mb-5'>
                            <div className="latest_img">
                                <img src={require('./image/latest4.jpg')} alt="" />
                            </div>
                            <div className="latest_img_user_details d-flex align-items-center mt-4 mb-3">
                                <FaRegUser className='me-2' />
                                <a href="#" className='text-black me-4'>Adam Smith</a>
                                <FaRegClock className='me-2' />
                                <a>September 16, 2023</a>
                            </div>
                            <div className="online_casinos">
                                <a href="#" className='text-black fs-4 fw-bold'>Online Casinos and Land-Based Casinos Compared</a>
                                <p className='mt-3'>Non amet convallis feugiat nisl eget lacus. Mus sed ornare massa proin ante consequat sed.</p>
                            </div>
                            <div className="latest_button mt-5">
                                <a href="#">
                                    <button className='rounded-5 text-white fw-bold'> Read more</button>
                                </a>
                                <FaRegCommentAlt className='ms-4 me-2' /><a href="#" className='text-black'>25</a>
                            </div>
                        </Col>
                        <Col className='mb-5'>
                            <div className="latest_img">
                                <img src={require('./image/latest5.jpg')} alt="" />
                            </div>
                            <div className="latest_img_user_details d-flex align-items-center mt-4 mb-3">
                                <FaRegUser className='me-2' />
                                <a href="#" className='text-black me-4'>Adam Smith</a>
                                <FaRegClock className='me-2' />
                                <a>September 16, 2023</a>
                            </div>
                            <div className="online_casinos">
                                <a href="#" className='text-black fs-4 fw-bold'>Online Casinos and Land-Based Casinos Compared</a>
                                <p className='mt-3'>Non amet convallis feugiat nisl eget lacus. Mus sed ornare massa proin ante consequat sed.</p>
                            </div>
                            <div className="latest_button mt-5">
                                <a href="#">
                                    <button className='rounded-5 text-white fw-bold'> Read more</button>
                                </a>
                                <FaRegCommentAlt className='ms-4 me-2' /><a href="#" className='text-black'>25</a>
                            </div>
                        </Col>
                        <Col className='mb-5'>
                            <div className="latest_img">
                                <img src={require('./image/latest6.jpg')} alt="" />
                            </div>
                            <div className="latest_img_user_details d-flex align-items-center mt-4 mb-3">
                                <FaRegUser className='me-2' />
                                <a href="#" className='text-black me-4'>Adam Smith</a>
                                <FaRegClock className='me-2' />
                                <a>September 16, 2023</a>
                            </div>
                            <div className="online_casinos">
                                <a href="#" className='text-black fs-4 fw-bold'>Online Casinos and Land-Based Casinos Compared</a>
                                <p className='mt-3'>Non amet convallis feugiat nisl eget lacus. Mus sed ornare massa proin ante consequat sed.</p>
                            </div>
                            <div className="latest_button mt-5">
                                <a href="#">
                                    <button className='rounded-5 text-white fw-bold'> Read more</button>
                                </a>
                                <FaRegCommentAlt className='ms-4 me-2' /><a href="#" className='text-black'>25</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Blogreadour
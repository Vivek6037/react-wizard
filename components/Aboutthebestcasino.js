import { Container, Row, Col } from 'react-bootstrap';
import { IoMdCheckmark } from "react-icons/io";

function Aboutthebestcasino() {
    return (
        <>
            <div className="the_best_casino_game spacer py-5">
                <Container fluid>
                    <Row>
                        <Col>
                            <h1 className='text-white mt-5 fw-bold'>Top-rated casino & gambling  online</h1>
                        </Col>
                    </Row>
                    <Row className='pb-5 row-cols-1 row-cols-lg-2 row-cols-md-2'>
                        <Col className='the_best_cols p'>
                            <p className='text-secondary fs-5 mt-4'>Donec et odio pellentesque diam volutpat. Eget nulla facilisi etiam dignissim diam quis enim. Vulputate eu scelerisque felis imperdiet. Aliquam ante mauris, pharetra quis augue ac, sagittis aliquet purus.</p>
                            <p className='text-secondary fs-5 mt-1 mb-5'>In ac justo eleifend, interdum lectus sed, hendrerit leo. Integer lobortis gravida erat, eget tempor magna mollis atacilisis magna etiam.</p>
                        </Col>
                        <Col className='the_best_cols p'>
                            <p className='text-white fs-5 mt-4'><IoMdCheckmark className='mark fs-1' />Proin quis sagittis tellus. Curabitur vestibulum mi augue. Maecenas porttitor eleifend quam ultrices porttitor.</p>
                            <p className='text-white fs-5'><IoMdCheckmark className='mark fs-1' />Curabitur vestibulum mi augue. Maecenas porttitor eleifend.</p>
                            <p className='text-white fs-5'><IoMdCheckmark className='mark fs-1' />Mauris consectetur leo viverra mi dapibus finibus.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Aboutthebestcasino
import { Button, Row, Col } from 'reactstrap'

const Header = () => {
    return (
        <Row className='dark-theme py-1'>
            <Col className='d-flex align-items-center justify-content-end'>
                <Button className='btn-sm my-2 me-2'>night mode</Button>
            </Col>
        </Row>
    )
};

export default Header;
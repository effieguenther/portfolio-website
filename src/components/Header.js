import { Button, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <Row className='dark-theme'>
            <Col className='col-9 d-flex justify-content-center align-items-center'>
                <Button className='btn-sm my-2 ms-3'> 
                    <FontAwesomeIcon icon={faGithub} size='xl'/>
                </Button>
                <Button className='btn-sm my-2 mx-1'> 
                    <FontAwesomeIcon icon={faLinkedin} size='xl'/>
                </Button>
                <p className=''>Connect with me</p>
            </Col>
            <Col className='col-3 d-flex align-items-center justify-content-end'>
                <Button className='btn-sm my-2 me-2'>night mode</Button>
            </Col>
        </Row>
    )
};

export default Header;
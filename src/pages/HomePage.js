import { Button, Row, Col } from 'reactstrap';
import headshot from '../assets/img/portfolio_headshot.png'
import Header from '../components/Header';
import ChromeExtension from '../components/chrome-extension/ChromeExtension';

const HomePage = () => {
    return(
        <>
            <Header />
            <Row className='light-theme pt-4'>
                <Col className='col-3'>
                    <img
                    src={headshot}
                    alt='effie guenther headshot'
                    className='img-fluid'
                    />
                </Col>
                <Col className='col-6 d-flex justify-content-center align-items-start flex-column'>
                    <p className='small-text'>Hello world, my name is</p>
                    <h1>Effie Guenther</h1>
                    <h5>I develop websites and mobile applications</h5>
                </Col>
                <Col className='d-flex justify-content-center align-items-end flex-column'>
                    <Button>Projects</Button>
                    <Button>Resume</Button>
                    <Button>About Me</Button>
                    <Button>Contact</Button>
                </Col>
            </Row>
            <Row id='projects'>
                <ChromeExtension />
            </Row>
        </>
    );
}

export default HomePage;
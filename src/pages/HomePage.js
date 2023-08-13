import { Button, Row, Col } from 'reactstrap';
import headshot from '../assets/img/portfolio_headshot.png'
import Header from '../components/Header';
import ChromeExtension from '../components/chrome-extension/ChromeExtension';
import SocialButtons from '../components/SocialButtons';

const HomePage = () => {
    return(
        <>
            <Header />
            <Row className='light-theme pt-4'>
                <Col className='col-4'>
                    <img
                    src={headshot}
                    alt='effie guenther headshot'
                    className='img-fluid'
                    />
                </Col>
                <Col className='col-8 d-flex align-items-center'>
                    <Row>
                        <Col className='col-12'>
                            <p className='small-text'>Hello world, my name is</p>
                            <h1>Effie Guenther</h1>
                            <h5>I develop websites and mobile applications</h5>
                        </Col>
                        <Col className='text-start'>
                            <div className='nav-buttons mt-3'>
                                <Button className=''>Projects</Button>
                                <Button className=''>Resume</Button>
                                <Button className=''>About Me</Button>
                                <Button className=''>Contact</Button>
                            </div>
                            <p className='mt-4 mb-0'>Connect with me!</p>
                            <SocialButtons />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='section-header'>
                <h3 className='text-center'>My Projects</h3>
            </Row>
            <Row>
                <ChromeExtension />
            </Row>
        </>
    );
}

export default HomePage;
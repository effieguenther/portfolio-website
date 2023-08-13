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
                <Col className='col-xs-12 col-sm-3 text-center'>
                    <div className='sm-d-flex justify-content-center align-items-center flex-column'>
                        <Button className='xs-d-inline'>Projects</Button>
                        <Button className='xs-d-inline'>Resume</Button>
                        <Button className='xs-d-inline'>About Me</Button>
                        <Button className='xs-d-inline'>Contact</Button>
                    </div>
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
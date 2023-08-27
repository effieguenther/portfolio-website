import { Button, Row, Col } from 'reactstrap';
import { useSpring, animated } from '@react-spring/web';
import { useSelector } from 'react-redux';
import headshot from '../assets/img/portfolio_headshot_color.png'
import Header from '../components/Header';
import ChromeExtension from '../components/chrome-extension/ChromeExtension';
import SocialButtons from '../components/SocialButtons';
import Resume from '../components/Resume';

const HomePage = () => {
    const props1 = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: 500}
    })

    const props2 = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: 500},
        delay: 200
    })

    const theme = useSelector((state) => state.themes.currentTheme);
    console.log(theme);

    return(
        <>
            <Header />
            <Row className={`${theme} pt-4`}>
                <Col className='col-4 col-md-3 px-4 pb-4 d-flex align-items-start justify-content-center'>
                    <img
                    src={headshot}
                    alt='effie guenther headshot'
                    className='img-fluid'
                    />
                </Col>
                <Col className='col-8 d-flex align-items-center mb-2'>
                    <Row className='pb-4'>
                        <Col className='col-12'>
                            <p className='small-text'>Hello world, my name is</p>
                            <animated.h1 style={props1}>Effie Guenther</animated.h1>
                            <animated.h5 style={props2}>I develop websites and mobile applications</animated.h5>
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
            <Row className={`section-header ${theme}`}>
                <h3 className='text-center'>My Projects</h3>
            </Row>
            <Row>
                <ChromeExtension />
            </Row>
            <Row className={`section-header ${theme}`}>
                <h3 classsName='text-center'>Resume</h3>
            </Row>
            <Resume />
        </>
    );
}

export default HomePage;
import { Button, Row, Col, Container, Card, CardTitle, CardText } from 'reactstrap';
import { useSpring, animated } from '@react-spring/web';
import { useSelector } from 'react-redux';
import headshot from '../assets/img/portfolio_headshot_color.png'
import Header from '../components/Header';
import SocialButtons from '../components/SocialButtons';
import Resume from '../components/Resume';
import SunAndMoon from '../components/SunAndMoon';

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

    return(
        <Container className={theme} fluid>
            <Header />
            <Row className={`${theme} pt-4`}>
                <Col className='col-4 col-md-3 px-4 pb-4 d-sm-flex align-items-start justify-content-center d-none'>
                    <img
                    src={headshot}
                    alt='effie guenther headshot'
                    className='img-fluid'
                    />
                </Col>
                <Col className='col-sm-8 d-flex align-items-center mb-2'>
                    <Row className='pb-4'>
                        <Col className='col-12'>
                            <Row>
                                <Col xs='9' sm='9' xl='10'>
                                    <p className='small-text'>Hello world, my name is</p>
                                    <animated.h1 style={props1}>Effie Guenther</animated.h1>
                                    <animated.h5 style={props2}>I develop websites and software</animated.h5>
                                </Col>
                                <Col id='sun'>
                                    <SunAndMoon currentTheme={theme}/>
                                </Col>
                            </Row>
                            
                        </Col>
                        <Col className='text-start'>
                            <div className='nav-buttons mt-1'>
                                <Button href='#projects'>Projects</Button>
                                <Button href='#resume'>Resume</Button>
                                <Button href='#resume'>About Me</Button>
                                <Button className=''>Contact</Button>
                            </div>
                            <p className='mt-4 mb-0'>Connect with me!</p>
                            <SocialButtons />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={`section-header ${theme}`}>
                <h3 className='text-center' id='projects'>My Projects</h3>
            </Row>
            <Row className='projects'>
                <Col xs='12' sm='6' lg='4'>
                    <Card className='project-card h-100'>
                        <CardTitle>
                            <a 
                                href='https://wordofmouth-alpha.web.app/'
                                target='_blank'
                            >
                                Word of Mouth
                            </a>
                        </CardTitle>
                        <hr/>
                            <CardText>
                                <p>A social media web application designed to service the unique infrastructure of freelance workers in Nepal</p>
                                <p className='sub-header'>Languages:</p>  
                                <p className='skills-used'>
                                    JavaScript | CSS/JSX
                                </p>
                                <br/>
                                <p className='sub-header'>Skills:</p>
                                <p className='skills-used'>
                                    React | Redux | Firebase | Bootstrap
                                </p>
                        </CardText>
                        <Button>
                            <a 
                                href='https://wordofmouth-alpha.web.app/'
                            target='_blank'
                            >
                                Preview
                            </a>
                        </Button>
                    </Card>
                </Col>
                <Col xs='12' sm='6' lg='4'>
                    <Card className='project-card h-100'>
                        <CardTitle>
                            <a href='https://github.com/effieguenther/focusReader' target='_blank'>
                                Focus Reader
                            </a>
                        </CardTitle>
                        <hr/>                
                        <CardText>
                            <p>A Chrome extension that lets the user reformat the text on any webpage to improve readability</p>
                            <p className='sub-header'>Languages:</p>  
                            <p className='skills-used'>
                                JavaScript | HTML/CSS
                            </p>
                            <br/>
                            <p className='sub-header'>Skills:</p>
                            <p className='skills-used'>
                                DOM manipulation | Chrome API
                            </p>
                        </CardText>
                        <Button>
                            <a href='https://github.com/effieguenther/focusReader' target='_blank'>
                                View Code
                            </a>
                        </Button>
                    </Card>
                </Col>
                <Col xs='12' sm='6' lg='4'>
                        <Card className='project-card h-100'>
                            <CardTitle>
                                <a href='https://github.com/effieguenther/asana_buddy' target='_blank'>
                                    Asana Buddy
                                </a>
                            </CardTitle>
                            <hr/>
                            <CardText>
                                <p>This CLI application prompts the user for a length of time in minutes, then creates a randomized yoga routine based on the input</p>
                                <p className='sub-header'>Languages:</p>  
                                <p className='skills-used'>
                                    Python
                                </p>
                                <br/>
                                <p className='sub-header'>Skills:</p>
                                <p className='skills-used'>
                                    OOP | Randomization
                                </p>
                            </CardText>
                            <Button>
                                <a href='https://github.com/effieguenther/asana_buddy' target='_blank'>
                                    View Code
                                </a>
                            </Button>
                        </Card>
                </Col>
            </Row>
            <Row className={`section-header ${theme}`}>
                <h3 classsName='text-center' id='resume'>Resume</h3>
            </Row>
            <Resume />
        </Container>
    );
}

export default HomePage;
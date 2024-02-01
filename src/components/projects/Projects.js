import { 
    Row, 
    Col, 
    Button, 
    Card, 
    CardTitle, 
    CardText, 
    Container, 
    Carousel, 
    CarouselItem, 
    CarouselControl
} from 'reactstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useTransition, animated, easings } from '@react-spring/web';
import ChromeExtension from '../chrome-extension/ChromeExtension'
import { miniProjects, womScreenshots, frScreenshots, abScreenshots, gmaScreenshots } from './project-data';


const Projects = () => {
    const theme = useSelector((state) => state.themes.currentTheme);
    const [womActiveIdx, setWomActiveIdx] = useState(0);
    const [frActiveIdx, setFrActiveIdx] = useState(0);
    const [abActiveIdx, setAbActiveIdx] = useState(0);
    const [gmaActiveIdx, setGmaActiveIdx] = useState(0);

    const transition = useTransition(true, {
        from: { opacity: 0.5, transform: 'translate3d(60vw, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(-100vw, 0, 0)' },
        config: { duration: 400, easing: easings.easeOutSine },
        exitBeforeEnter: true
    });

    return transition((style, item) =>
        item && (
        <div className={theme}>
        <animated.div style={{...style, minHeight: '100vh'}}>
            <Container fluid>
                <Row className={`section-header ${theme}`}>
                        <h3 id='projects'>My Projects</h3>
                </Row>
                <Row className='projects'>
                    <Col xs='12' md='6'>
                        <Card className='project-card h-100'>
                            <CardTitle>
                                <a
                                    href='https://grandma-8ed4c.web.app/'
                                    target='_blank'
                                >
                                    Granda Sandy's Kitchen
                                </a>
                            </CardTitle>
                            <hr />
                            <Row className=''>
                                <Col xs='12' xxl='6'>
                                    <CardText>
                                        <p>A MERN stack web application which houses my grandma's recipes so the whole family can access them. Features include Oauth2 accounts, sessions, comments, and email notifications.</p>
                                        <p className='sub-header'>Languages:</p>  
                                        <p className='skills-used'>
                                            JavaScript | HTML | CSS
                                        </p>
                                        <br/>
                                        <p className='sub-header'>Skills:</p>
                                        <p className='skills-used'>
                                            React | Redux | Bootstrap | Node | Express | MongoDB | Mongoose | Git | Firebase
                                        </p>
                                    </CardText>
                                        <Button 
                                            href='https://wordofmouth-alpha.web.app/'
                                            target='_blank'
                                            className='top-btn'
                                        >
                                        Preview
                                    </Button>
                                    <div className='inline-btns'>
                                        <Button 
                                            href='https://github.com/sruthiravindra/wordofmouth'
                                            target='_blank'
                                            className='me-1'
                                        >
                                            Frontend
                                        </Button>
                                        <Button 
                                            href='https://github.com/sruthiravindra/wordofmouth'
                                            target='_blank'
                                        >
                                            Backend
                                        </Button>
                                    </div>
                                </Col>
                                <Col>
                                    <Carousel 
                                        interval={5000}
                                        activeIndex={gmaActiveIdx}
                                        next={() => {
                                            setGmaActiveIdx(prev => 
                                                (prev === (gmaScreenshots.length - 1)) ? 0 : prev + 1
                                            )
                                        }}
                                        previous={() => {
                                            setGmaActiveIdx(prev => 
                                                (prev === 0 ? (gmaScreenshots.length -1) : prev - 1)
                                            )
                                        }}
                                    >
                                        {
                                            gmaScreenshots.map((screenshot, idx) => (
                                                <CarouselItem key={idx}>
                                                    <img className='screenshot' src={screenshot.src} alt={screenshot.altText} />
                                                </CarouselItem>
                                            ))
                                        }
                                        <CarouselControl 
                                            direction="prev"
                                            drectionText="Previous"
                                            onClickHandler={() => {
                                                setGmaActiveIdx(prev => 
                                                    (prev === 0 ? (gmaScreenshots.length -1) : prev - 1)
                                                )
                                            }}
                                        />
                                        <CarouselControl 
                                            direction="next"
                                            drectionText="Next"
                                            onClickHandler={() => {
                                                setGmaActiveIdx(prev => 
                                                    (prev === (gmaScreenshots.length - 1)) ? 0 : prev + 1
                                                )
                                            }}
                                        />
                                    </Carousel>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col xs='12' md='6'>
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
                            <Row>
                                <Col xs='12' xxl='6'> 
                                    <CardText>
                                        <p>A collaboratively-built MERN stack social media web application designed to service the unique infrastructure of freelance workers in Nepal. Features include user accounts, comments, and friend requests.</p>
                                        <p className='sub-header'>Languages:</p>  
                                        <p className='skills-used'>
                                            JavaScript | HTML | CSS
                                        </p>
                                        <br/>
                                        <p className='sub-header'>Skills:</p>
                                        <p className='skills-used'>
                                            React | Redux | Bootstrap | Node | Express | MongoDB | Mongoose | Git | Firebase
                                        </p>
                                    </CardText>
                                        <Button 
                                            href='https://wordofmouth-alpha.web.app/'
                                            target='_blank'
                                            className='top-btn'
                                        >
                                        Preview
                                    </Button>
                                    <div className='inline-btns'>
                                        <Button 
                                            href='https://github.com/sruthiravindra/wordofmouth'
                                            target='_blank'
                                            className='me-1'
                                        >
                                            Frontend
                                        </Button>
                                        <Button 
                                            href='https://github.com/sruthiravindra/wordofmouth'
                                            target='_blank'
                                        >
                                            Backend
                                        </Button>
                                    </div>
                                </Col>
                                <Col>
                                    <Carousel 
                                        interval={10000}
                                        activeIndex={womActiveIdx}
                                        next={() => {
                                            setWomActiveIdx(prev => 
                                                (prev === (womScreenshots.length - 1)) ? 0 : prev + 1
                                            )
                                        }}
                                        previous={() => {
                                            setWomActiveIdx(prev => 
                                                (prev === 0 ? (womScreenshots.length -1) : prev - 1)
                                            )
                                        }}
                                    >
                                        {
                                            womScreenshots.map((screenshot, idx) => (
                                                <CarouselItem key={idx}>
                                                    <img className='screenshot' src={screenshot.src} alt={screenshot.altText} />
                                                </CarouselItem>
                                            ))
                                        }
                                        <CarouselControl 
                                            direction="prev"
                                            drectionText="Previous"
                                            onClickHandler={() => {
                                                setWomActiveIdx(prev => 
                                                    (prev === 0 ? (womScreenshots.length -1) : prev - 1)
                                                )
                                            }}
                                        />
                                        <CarouselControl 
                                            direction="next"
                                            drectionText="Next"
                                            onClickHandler={() => {
                                                setWomActiveIdx(prev => 
                                                    (prev === (womScreenshots.length - 1)) ? 0 : prev + 1
                                                )
                                            }}
                                        />
                                    </Carousel>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col xs='12' md='6'>
                        <Card className='project-card h-100'>
                            <CardTitle>
                                <a href='https://github.com/effieguenther/focusReader' target='_blank'>
                                    Focus Reader
                                </a>
                            </CardTitle>
                            <hr/>   
                            <Row>
                                <Col xs='12' xxl='6'>
                                    <CardText>
                                        <p>A Chrome extension that lets the user reformat the text on any webpage to improve readability</p>
                                        <p className='sub-header'>Languages:</p>  
                                        <p className='skills-used'>
                                            JavaScript | HTML | CSS
                                        </p>
                                        <br/>
                                        <p className='sub-header'>Skills:</p>
                                        <p className='skills-used'>
                                            DOM Manipulation | Chrome API
                                        </p>
                                    </CardText>
                                    <Button href='#focus-reader' className='top-btn'>
                                        Demo
                                    </Button>
                                    <Button href='https://github.com/effieguenther/focusReader' target='_blank'>
                                        Source Code
                                    </Button>
                                </Col>
                                <Col>
                                    <Carousel 
                                        interval={10000}
                                        activeIndex={frActiveIdx}
                                        next={() => {
                                            setFrActiveIdx(prev => 
                                                (prev === (frScreenshots.length - 1)) ? 0 : prev + 1
                                            )
                                        }}
                                        previous={() => {
                                            setFrActiveIdx(prev => 
                                                (prev === 0 ? (frScreenshots.length -1) : prev - 1)
                                            )
                                        }}
                                    >
                                        {
                                            frScreenshots.map((screenshot, idx) => (
                                                <CarouselItem key={idx}>
                                                    <img className='screenshot' src={screenshot.src} alt={screenshot.altText} />
                                                </CarouselItem>
                                            ))
                                        }
                                        <CarouselControl 
                                            direction="prev"
                                            drectionText="Previous"
                                            onClickHandler={() => {
                                                setFrActiveIdx(prev => 
                                                    (prev === 0 ? (frScreenshots.length -1) : prev - 1)
                                                )
                                            }}
                                        />
                                        <CarouselControl 
                                            direction="next"
                                            drectionText="Next"
                                            onClickHandler={() => {
                                                setFrActiveIdx(prev => 
                                                    (prev === (frScreenshots.length - 1)) ? 0 : prev + 1
                                                )
                                            }}
                                        />
                                    </Carousel>
                                </Col>
                            </Row>             
                        </Card>
                    </Col>
                    <Col xs='12' md='6'>
                        <Card className='project-card h-100'>
                            <CardTitle>
                                <a href='https://github.com/effieguenther/asana_buddy' target='_blank'>
                                    Asana Buddy
                                </a>
                            </CardTitle>
                            <hr/>
                            <Row>
                                <Col xs='12' xxl='6'>
                                    <CardText>
                                        <p>This CLI application prompts the user for a length of time in minutes, then creates a randomized yoga routine based on the input</p>
                                        <p className='sub-header'>Languages:</p>  
                                        <p className='skills-used'>
                                            Python
                                        </p>
                                        <br/>
                                        <p className='sub-header'>Skills:</p>
                                        <p className='skills-used'>
                                            Object Oriented Programming
                                        </p>
                                    </CardText>
                                    <Button href='#asana-buddy' className='top-btn'>
                                        Demo
                                    </Button>
                                    <Button href='https://github.com/effieguenther/asana_buddy' target='_blank'>
                                        Source Code
                                    </Button>
                                </Col>
                                <Col>
                                    <Carousel 
                                        interval={10000}
                                        activeIndex={abActiveIdx}
                                        next={() => {
                                            setAbActiveIdx(prev => 
                                                (prev === (abScreenshots.length - 1)) ? 0 : prev + 1
                                            )
                                        }}
                                        previous={() => {
                                            setAbActiveIdx(prev => 
                                                (prev === 0 ? (abScreenshots.length -1) : prev - 1)
                                            )
                                        }}
                                    >
                                        {
                                            abScreenshots.map((screenshot, idx) => (
                                                <CarouselItem key={idx}>
                                                    <img className='screenshot w-50' src={screenshot.src} alt={screenshot.altText} />
                                                </CarouselItem>
                                            ))
                                        }
                                        <CarouselControl 
                                            direction="prev"
                                            drectionText="Previous"
                                            onClickHandler={() => {
                                                setAbActiveIdx(prev => 
                                                    (prev === 0 ? (abScreenshots.length -1) : prev - 1)
                                                )
                                            }}
                                        />
                                        <CarouselControl 
                                            direction="next"
                                            drectionText="Next"
                                            onClickHandler={() => {
                                                setAbActiveIdx(prev => 
                                                    (prev === (abScreenshots.length - 1)) ? 0 : prev + 1
                                                )
                                            }}
                                        />
                                    </Carousel>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-5' id='focus-reader'>
                    <p className='demo-title'>Focus Reader Demo</p>
                    <ChromeExtension />
                </Row>
                <Row className='my-5' id='asana-buddy'>
                    <p className='demo-title'>Asana Buddy Demo</p>
                    <p className='text-center mb-4'>coming soon</p>
                </Row>
                <p className='demo-title'>Mini Projects</p>
                <p className='text-center mb-5'>explorations and experimentation with code sandbox</p>
                <Container>
                    <Row className='mini-projects'>
                        {
                            miniProjects.map((project, idx) => (
                                <Col xs='6' md='4' xl='3' key={idx} className='mini-card-container'>
                                    <Card className='project-card mini h-100'>
                                        <CardTitle>
                                            {project.title}
                                        </CardTitle>
                                        <CardText>
                                            {project.description}
                                        </CardText>
                                        <Button href={project.link} target='_blank' className='mt-auto'>
                                            Demo
                                        </Button>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </Container>
        </animated.div>
        </div>
    ))
}

export default Projects;
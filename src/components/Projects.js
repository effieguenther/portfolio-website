import { Row, Col, Button, Card, CardTitle, CardText } from 'reactstrap';
import { useSelector } from 'react-redux';

const Projects = () => {
    const theme = useSelector((state) => state.themes.currentTheme);

    return (
        <>
            <Row className={`section-header ${theme}`}>
                    <h3 id='projects'>My Projects</h3>
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
                            <Button 
                                href='https://wordofmouth-alpha.web.app/'
                                target='_blank'
                            >
                                Preview
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
                        <Button href='https://github.com/effieguenther/focusReader' target='_blank'>
                            View Code
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
                        <Button href='https://github.com/effieguenther/asana_buddy' target='_blank'>
                            View Code
                        </Button>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Projects;
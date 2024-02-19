import { Row, Col, Container } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useTransition, useTrail, animated, easings } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from './skills';
import { resumeData } from './resume-data';

const Resume = () => {
    const theme = useSelector((state) => state.themes.currentTheme);
    const { languages, frameworks, databases, apis, visual, scripting, versionControl } = skills;
    const downloadLink = `${process.env.PUBLIC_URL}pdf/effie_guenther_resume.pdf`;

    const transition = useTransition(true, {
        from: { opacity: 0.5, transform: 'translate3d(60vw, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(-100vw, 0, 0)' },
        config: { duration: 300, easing: easings.easeOutSine },
        exitBeforeEnter: true
    });

    const languageTrail = useTrail(languages.length, {
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: { duration: 300 },
        delay: 300,
    });
    const frameworkTrail = useTrail(frameworks.length, {
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: { duration: 200 },
        delay: 400,
    });
    const databaseTrail = useTrail(databases.length, {
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: { duration: 300 },
        delay: 500,
    });
    const apiTrail = useTrail(apis.length, {
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: { duration: 300 },
        delay: 600,
    });
    const visualTrail = useTrail(visual.length, {
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: { duration: 300 },
        delay: 700,
    });
    const scriptingTrail = useTrail(scripting.length, {
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: { duration: 300 },
        delay: 800,
    });
    const versionControlTrail = useTrail(versionControl.length, {
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: { duration: 300 },
        delay: 900,
    });

    return transition((style, item) =>
        item && (
        <div className={theme}>
            <animated.div style={{...style, minHeight: '100vh'}}>
                <Container fluid>
                    <div className='d-flex justify-content-start pt-4 align-items-end'>
                        <h3 id='resume' className='resume-header'>Resume</h3>
                        <a 
                            href={downloadLink} 
                            download='effie_guenther_resume.pdf'
                            className='pdf-link'
                        >
                                Download as PDF
                        </a>
                    </div>
                    <hr />
                    <p className='big-header'>SKILLS</p>
                    <div className='skills-list'>
                        <Row>
                            <Col xs='4' md='3' xl='2'>
                                <p className='skill-section-title'>Languages:</p>
                            </Col>
                            <Col>
                            { 
                                    languageTrail.map((props, idx) => (
                                        <animated.p 
                                            style={{ ...props, transition: 'none', animation: 'none' }} 
                                            className='skill'
                                        >
                                            <FontAwesomeIcon icon={languages[idx].icon}/>
                                            {languages[idx].skill}
                                        </animated.p>
                                    ))
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='4' md='3' xl='2'>
                                <p className='skill-section-title'>Frameworks + Libraries:</p>
                            </Col>
                            <Col>
                                { 
                                    frameworkTrail.map((props, idx) => (
                                        <animated.p 
                                            style={{ ...props, transition: 'none', animation: 'none' }} 
                                            className='skill'
                                        >
                                            <FontAwesomeIcon icon={frameworks[idx].icon}/>
                                            {frameworks[idx].skill}
                                        </animated.p>
                                    ))
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='4' md='3' xl='2'>
                                <p className='skill-section-title'>Databases/server:</p>
                            </Col>
                            <Col>
                                { 
                                    databaseTrail.map((props, idx) => (
                                        <animated.p 
                                            style={{ ...props, transition: 'none', animation: 'none' }} 
                                            className='skill'
                                        >
                                            <FontAwesomeIcon icon={databases[idx].icon}/>
                                            {databases[idx].skill} 
                                        </animated.p>
                                    ))
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='4' md='3' xl='2'>
                                <p className='skill-section-title'>APIs:</p>
                            </Col>
                            <Col>
                                { 
                                    apiTrail.map((props, idx) => (
                                        <animated.p 
                                            style={{ ...props, transition: 'none', animation: 'none' }} 
                                            className='skill'
                                        >
                                            <FontAwesomeIcon icon={apis[idx].icon}/>
                                            {apis[idx].skill}
                                        </animated.p>
                                    ))
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='4' md='3' xl='2'>
                                <p className='skill-section-title'>Visual Editing:</p>
                            </Col>
                            <Col>
                                { 
                                    visualTrail.map((props, idx) => (
                                        <animated.p 
                                            style={{ ...props, transition: 'none', animation: 'none' }} 
                                            className='skill'
                                        >
                                            <FontAwesomeIcon icon={visual[idx].icon}/>
                                            {visual[idx].skill}
                                        </animated.p>
                                    ))
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='4' md='3' xl='2'>
                                <p className='skill-section-title'>Scripting:</p>
                            </Col>
                            <Col>
                                { 
                                    scriptingTrail.map((props, idx) => (
                                        <animated.p 
                                            style={{ ...props, transition: 'none', animation: 'none' }} 
                                            className='skill'
                                        >
                                            <FontAwesomeIcon icon={scripting[idx].icon}/>
                                            {scripting[idx].skill}
                                        </animated.p>
                                    ))
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='4' md='3' xl='2'>
                                <p className='skill-section-title'>Version Control:</p>
                            </Col>
                            <Col>
                                {
                                    versionControlTrail.map((props, idx) => (
                                        <animated.p 
                                            style={{ ...props, transition: 'none', animation: 'none' }} 
                                            className='skill'
                                        >
                                            <FontAwesomeIcon icon={versionControl[idx].icon}/>
                                            {versionControl[idx].skill}
                                        </animated.p>
                                    ))
                                }
                            </Col>
                        </Row>
                    </div>
                    <p className='big-header'>WORK EXPERIENCE</p>
                    {
                        resumeData.map((job, jobIdx) => {
                            return <div key={jobIdx}>
                                <hr/>
                                <Row className='work-exp'>
                                    <Col xs='12' md='6' lg='8' xxl='9' className='d-flex ps-4'>
                                        <p className='company'>{job.company}</p>
                                        <p>-</p>
                                        <p className='title'>{job.title}</p>
                                    </Col>
                                    <Col className='justify-content-start'>
                                        <p className='location'>{job.location}</p>
                                        <p className='date'>{job.date}</p>
                                    </Col>
                                </Row>
                                <hr/>
                                <ul className='work-desc'>
                                    {
                                        job.description.map((desc, idx) => (
                                            <li key={jobIdx + idx}>{desc}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        })
                    }
                    <p className='big-header'>EDUCATION AND CERTIFICATES</p>
                    <div className='education'>
                        <Row>
                            <Col className='education-desc' xs='9'>
                                <p className='title'>Nucamp</p>
                                <p>-</p>
                                <p className='degree'>Certificate, Frontend Development</p>
                            </Col>
                            <Col>
                                <p>Oct. 2023</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='education-desc' xs='9'>
                                <p className='title'>Boot.dev</p>
                                <p>-</p>
                                <p className='degree'>Certificate, Backend Development</p>
                            </Col>
                            <Col>
                                <p>Nov. 2023</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='education-desc' xs='9'>
                                <p className='title'>The University of Alabama</p>
                                <p>-</p>
                                <p className='degree'>B.S., Minor in Computer Science</p>
                            </Col>
                            <Col>
                                <p>Dec. 2018</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </animated.div>
        </div>
    ))
}

export default Resume;


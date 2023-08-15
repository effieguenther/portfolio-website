import { Col, Row } from 'reactstrap';

const Resume = () => {
    return (
        <>
            <Row className='ms-1 mt-4'>
                <h5>Skills</h5>
            </Row>
            <Row className='my-4 ms-1'>
                <h6>Technical Skills</h6>
            </Row>
            <Row>
                <div className='skills-list'>
                    <p>HTML/CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>React Native</p>
                    <p>Redux</p>
                    <p>Firebase</p>
                    <p>Bootstrap</p>
                    <p>NodeJS</p>
                    <p>MongoDB</p>
                    <p>Github</p>
                    <p>Python</p>
                    <p>Microsoft Office</p>
                    <p>Photoshop</p>
                    <p>Illustrator</p>
                </div>
            </Row>
            <Row className='ms-1 my-4'>
                <h6>Soft Skills</h6>
            </Row>
            <Row>
                <div className='skills-list'>
                    <p>Communication</p>
                    <p>Calm under pressure</p>
                    <p>Attention to detail</p>
                    <p>Emotional intelligence</p>
                </div>    
            </Row>
            <Row className='ms-1 my-4'>
                <h5 className='mt-3'>Education</h5>
            </Row>
            <Row>
                <p className='school-header'>Nucamp Full Stack Program - 2023</p>
                <p className='school-desc'>Skills accquired: React, React Native, Redux, Firebase, Bootstrap, NodeJS, MongoDB</p>
                <p className='school-header'>Boot.dev Backend Program - 2022</p>
                <p className='school-desc'>Skills accquired: Python, JavaScript, OOP, Algorithms, Data Structures, HTTP</p>
                <p className='school-header'>The University of Alabama - 2018</p>
                <p className='school-desc'>B.S. with a Minor in Computer Science</p>
            </Row>
            <Row className='ms-1'>
                <h5>My Story</h5>
            </Row>
            <Row>
                <p className='story-desc'>After 4 years as a product developer for luxury fashion companies in New York City, I realized that I wanted a different career. I have always had an interest in coding since being on the robotics team in high school, and continued my study through a minor in college. I rekindled my love for software with the Boot.dev program, and really committed to this path after joning Nucamp's full stack course. Over the past year I have worked on my passion projects and started freelancing with Upwork.</p>
            </Row>
        </>
    )
};

export default Resume;


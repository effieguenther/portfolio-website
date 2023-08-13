import { Col, Row } from 'reactstrap';

const Resume = () => {
    return (
        <>
            <Row className='project-header'>
                <h6>Skills</h6>
            </Row>
            <Row>
                <ul className='skills-list'>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Redux</li>
                    <li>Firebase</li>
                    <li>Bootstrap</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>Github</li>
                    <li>Python</li>
                    <li>Microsoft Office</li>
                    <li>Adobe Photoshop/Illustrator</li>
                </ul>
                <ul>
                    <li>Communication</li>
                    <li>Calm under pressure</li>
                    <li>Attention to detail</li>
                    <li>Emotional intelligene</li>
                </ul>
            </Row>
            <Row className='project-header'>
                <h6>Education</h6>
            </Row>
            <Row>
                <p>Nucamp Full Stack Program - 2023</p>
                <p>Skills accquired: React, React Native, Redux, Firebase, Bootstrap, NodeJS, MongoDB</p>
                <p>Boot.dev Backend Program - 2022</p>
                <p>Skills accquired: Python, JavaScript, OOP, Algorithms, Data Structures, HTTP</p>
                <p>The University of Alabama - 2018</p>
                <p>B.S. with a Minor in Computer Science</p>
            </Row>
            <Row className='project-header'>
                <h6>My Story</h6>
            </Row>
            <Row>
                <p>After 4 years as a product developer for luxury fashion companies in New York City, I realized that I wanted a different career. I have always had an interest in coding since being on the robotics team in high school, and continued my study through a minor in college. I rekindled my love for software with the Boot.dev program, and really committed to this path after joning Nucamp's full stack course. Over the past year I have worked on my passion projects and started freelancing with Upwork.</p>
            </Row>
        </>
    )
};

export default Resume;


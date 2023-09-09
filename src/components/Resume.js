import { Row } from 'reactstrap';

const Resume = () => {
    return (
        <>
            <Row>
                <p className='big-header'>Skills</p>
                <p className='small-header'>Technical Skills</p>
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
            <p className='small-header'>Soft Skills</p>
            <Row>
                <div className='skills-list'>
                    <p>Communication</p>
                    <p>Calm under pressure</p>
                    <p>Attention to detail</p>
                    <p>Emotional intelligence</p>
                </div>    
            </Row>
            <p className='big-header'>Education</p>
            <Row className='mb-5'>
                <p className='small-header'>Nucamp Full Stack Program - 2023</p>
                <p className='school-desc'>Skills accquired: React, React Native, Redux, Firebase, Bootstrap, NodeJS, MongoDB</p>
                <p className='small-header'>Boot.dev Backend Program - 2022</p>
                <p className='school-desc'>Skills accquired: Python, JavaScript, OOP, Algorithms, Data Structures, HTTP</p>
                <p className='small-header'>The University of Alabama - 2018</p>
                <p className='school-desc'>B.S. with a Minor in Computer Science</p>
            </Row>
        </>
    )
};

export default Resume;

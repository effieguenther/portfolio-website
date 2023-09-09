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
            <Row>
                <p className='small-header'>Nucamp Full Stack Program - 2023</p>
                <p className='school-desc'>Skills accquired: React, React Native, Redux, Firebase, Bootstrap, NodeJS, MongoDB</p>
                <p className='small-header'>Boot.dev Backend Program - 2022</p>
                <p className='school-desc'>Skills accquired: Python, JavaScript, OOP, Algorithms, Data Structures, HTTP</p>
                <p className='small-header'>The University of Alabama - 2018</p>
                <p className='school-desc'>B.S. with a Minor in Computer Science</p>
            </Row>
            <p className='big-header'>My Story</p>
            <Row>
                <p className='story-desc'>I have loved coding since joning the robotics team in high school and continued my computer science study through a minor in college. However, I was young and enticed by a more creative line of work. After graduating college, I spent 4 years as a product developer for luxury fashion companies in New York City. After a while I felt stuck in a problematic industry, and I realized that I needed to make a huge change. For the past year, I have gotten back to my roots and dedicated every moment of my free time to learning code. Through bootcamps, self-study, and freelancing with Upwork, I have honed my skills and fallen in love with code. With my background in developing luxury products, I bring a unique eye for aesthetic and detail in my code to create visually stunning user experiences.</p>
            </Row>
        </>
    )
};

export default Resume;


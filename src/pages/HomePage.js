import { Button, Container, } from 'reactstrap';
import { useTransition, animated } from '@react-spring/web';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import MyStory from '../components/MyStory';
import BackToTop from '../components/BackToTop';

const HomePage = () => {
    const theme = useSelector((state) => state.themes.currentTheme);
    const [activeSection, setActiveSection] = useState('home');

    const transitions = useTransition(activeSection, {
        from: { opacity: 0, transform: 'translate3d(100vw, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(-20vw, 0, 0)' },
        config: { duration: 400 },
        exitBeforeEnter: true
    });

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return(
        <div className={`${theme}`} style={{ minHeight: '100vh' }}>
            <Header handleSectionChange={handleSectionChange} />
            <Container fluid>
                {transitions((style, item) => (
                    <animated.div style={style} key={item}>
                        {item === 'home' && <Home />}
                        {item === 'projects' && <Projects />}
                        {item === 'resume' && <Resume />}
                        {item === 'mystory' && <MyStory />}
                    </animated.div>
                ))}
            </Container>
            <BackToTop />
        </div>
    );
}

export default HomePage;


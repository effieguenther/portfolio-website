import { Row, Container } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useTransition, animated, easings } from '@react-spring/web';

const MyStory = () => {
    const theme = useSelector((state) => state.themes.currentTheme);

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
            <animated.div style={{...style, minHeight: '100vh'}} className={theme}>
                <Container fluid>
                    <Row className={`section-header ${theme}`}>
                        <h3 id='my-story'>
                            My Story
                        </h3>
                    </Row>
                    <Row>
                        <p className='story-desc'>I have loved coding since joning the robotics team in high school and continued my computer science study through a minor in college. However, I was young and enticed by a more creative line of work. After graduating college, I spent 4 years as a product developer for luxury fashion companies in New York City. After a while I felt stuck in a problematic industry, and I realized that I needed to make a huge change. For the past year, I have gotten back to my roots and dedicated every moment of my free time to learning code. Through bootcamps, self-study, and freelancing with Upwork, I have honed my skills and fallen in love with code. With my background in developing luxury products, I bring a unique eye for aesthetic and detail in my code to create visually stunning user experiences.</p>
                    </Row>
                </Container>
            </animated.div>
        </div>
    ))
}

export default MyStory;
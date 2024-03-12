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
                        <p className='story-desc'>
                        As a Full Stack Developer, I love seeing the big picture. I’m always thinking about the end user and how everything, from optimized speed on the backend to elegant design on the frontend, is part of the experience. I’m a big believer in communication and teamwork, and I prefer to work on small, fast-paced teams.
                        </p>
                    </Row>
                    {/* <h3 className='text-center'>My Interests</h3>
                    <Row>

                    </Row> */}
                </Container>
            </animated.div>
        </div>
    ))
}

export default MyStory;
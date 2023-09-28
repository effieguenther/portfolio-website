  import { Row, Col, Button} from 'reactstrap';
  import { useSelector } from 'react-redux';
  import { useSpring, animated } from '@react-spring/web';
  import headshot from '../assets/img/portfolio_headshot_color.png';
  import SocialButtons from '../components/SocialButtons';
  import SunAndMoon from '../components/SunAndMoon';

  
  const Home = () => {
    const theme = useSelector((state) => state.themes.currentTheme);
    const props1 = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: 500}
    })

    const props2 = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: 500},
        delay: 200
    })

    return (
        <Row className={`${theme} pt-4`}>
            <Col className='col-4 col-md-3 px-4 pb-4 d-sm-flex align-items-start justify-content-center d-none'>
                <img
                src={headshot}
                alt='effie guenther headshot'
                className='img-fluid'
                />
            </Col>
            <Col className='col-sm-8 d-flex align-items-center mb-2'>
                <Row className='pb-4'>
                    <Col className='col-12'>
                        <Row>
                            <Col xs='9' sm='8' md='9'>
                                <p className='small-text'>Hello world, my name is</p>
                                <animated.h1 style={props1}>Effie Guenther</animated.h1>
                                <animated.h5 style={props2}>I develop websites and software</animated.h5>
                            </Col>
                            {/* <Col id='sun'>
                                <SunAndMoon currentTheme={theme}/>
                            </Col> */}
                        </Row>
                        
                    </Col>
                    <Col className='text-start'>
                        <div className='nav-buttons mt-1'>
                            <Button href='#projects'>Projects</Button>
                            <Button href='#resume'>Resume</Button>
                            <Button href='#my-story'>My Story</Button>
                        </div>
                        <p className='mt-4 mb-0'>Connect with me!</p>
                        <SocialButtons />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Home;

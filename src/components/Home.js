  import { Row, Col, Button} from 'reactstrap';
  import { useSelector } from 'react-redux';
  import { useTrail, useTransition, easings, animated } from '@react-spring/web';
  import headshot from '../assets/img/portfolio_headshot_color.png';
  import SocialButtons from '../components/SocialButtons';

  
  const Home = () => {
    const theme = useSelector((state) => state.themes.currentTheme);
    const items = [
        {
            text: "Hello world, my name is",
            element: "p",
            className: "small-text"
        },
        {
            text: "Effie Guenther",
            element: "h1",
            className: ""
        },
        {
            text: "I develop websites and software",
            element: "h5",
            className: ""
        }
    ]

    const trail = useTrail(items.length, {
        from: { opacity: 0, transform: "translateX(20px)" },
        to: { opacity: 1, transform: "translateX(0)" },
        config: { duration: 500 },
        delay: 300,
      });

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
            <Row className='pt-4'>
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
                                    {trail.map((props, idx) => {
                                        const ItemElement = animated[items[idx].element];
                                        return (
                                            <ItemElement
                                            key={idx}
                                            style={props}
                                            className={items[idx].className}
                                            >
                                            {items[idx].text}
                                            </ItemElement>
                                        );
                                    })}
                                </Col>
                            </Row>
                        </Col>
                        <Col className='text-start'>
                            <p className='mt-4 mb-0'>Connect with me!</p>
                            <SocialButtons />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </animated.div>
    </div>))
}

export default Home;

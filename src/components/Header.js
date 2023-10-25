import { Button, Row, Col, Container, Nav } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme }from '../features/themes/themesSlice';

const Header = () => {
    const theme = useSelector((state) => state.themes.currentTheme);
    const dispatch = useDispatch();

    const clickHandler = () => {
        if (theme ==='light') {
            dispatch(changeTheme('dark'));
        } else {
            dispatch(changeTheme('light'));
        }
    }

    return (
        <Container fluid>
            <Row className={`${theme} header py-1`}>
                <Col className='nav-buttons'>
                    <NavLink to='/'>
                        <Button>Home</Button>
                    </NavLink>
                    <NavLink to='/projects'>
                        <Button>Projects</Button>
                    </NavLink>
                    <NavLink to='/resume'>
                        <Button>Resume</Button>
                    </NavLink>
                    <NavLink to='/my-story'>
                        <Button>My Story</Button>
                    </NavLink>
                </Col>
                <Col className='d-flex align-items-end justify-content-end header-link'>
                    <a 
                        href='https://github.com/effieguenther/portfolio-website/tree/master' 
                        target='_blank'>
                            see the code behind this website
                    </a>
                    <Button className='btn-sm my-2 me-2' onClick={clickHandler}>
                        {theme === 'light' ? ('night mode') : ('day mode')}
                    </Button>
                </Col>
            </Row>
        </Container> 
    )
};

export default Header;
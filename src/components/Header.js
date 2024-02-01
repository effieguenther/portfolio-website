import { Button, Row, Col, Container, Collapse } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme }from '../features/themes/themesSlice';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const theme = useSelector((state) => state.themes.currentTheme);
    const dispatch = useDispatch();
    const [xs, setXs] = useState(window.innerWidth < 576);
    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        if (theme ==='light') {
            dispatch(changeTheme('dark'));
        } else {
            dispatch(changeTheme('light'));
        }
    }

    useEffect(() => {
        const handleResize = () => {
          setXs(window.innerWidth < 576);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <Container fluid>
            {
                xs ? (
                    <Row className={`${theme} header py-2`}>
                        <div className='d-flex flex-column align-items-start'>
                            <Button onClick={() => setOpen(prev => !prev)}>
                                <FontAwesomeIcon icon={faBars} />
                            </Button>
                            <Collapse isOpen={open}>
                                <div className='collapse-nav-btns'>
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                    <NavLink to="/projects">
                                        Projects
                                    </NavLink>
                                    <NavLink to="/resume">
                                        Resume
                                    </NavLink>                  
                                    <NavLink to="/my-story">
                                        My Story
                                    </NavLink>
                                </div>
                            </Collapse>
                        </div>
                    </Row>
                ) : (
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
                            <Button className='btn-sm my-2 me-2' onClick={clickHandler}>
                                {theme === 'light' ? ('night mode') : ('day mode')}
                            </Button>
                        </Col>
                    </Row>
                )
                
            }
        </Container> 
    )
};

export default Header;
import { Button, Row, Col, Container } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme }from '../features/themes/themesSlice';
import { click } from '@testing-library/user-event/dist/click';

const Header = ({ handleSectionChange }) => {
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
                    <Button onClick={() => handleSectionChange('home')}>Home</Button>
                    <Button onClick={() => handleSectionChange('projects')}>Projects</Button>
                    <Button onClick={() => handleSectionChange('resume')}>Resume</Button>
                    <Button onClick={() => handleSectionChange('mystory')}>My Story</Button>
                </Col>
                <Col className='d-flex align-items-end justify-content-end header-link'>
                    <a href='https://github.com/effieguenther/portfolio-website/tree/master' target='_blank'>see the code behind this website</a>
                    <Button 
                        className='btn-sm my-2 me-2'
                        onClick={clickHandler}
                    >
                    {
                        theme === 'light' ? ('night mode') : ('day mode')
                    }
                    </Button>
                </Col>
            </Row>
        </Container> 
    )
};

export default Header;
import { Button, Row, Col } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme }from '../features/themes/themesSlice';
import { click } from '@testing-library/user-event/dist/click';

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
        <Row className={`${theme} header py-1`}>
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
    )
};

export default Header;
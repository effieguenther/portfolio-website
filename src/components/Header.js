import { Button, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux';

const Header = () => {
    const theme = useSelector((state) => state.themes.currentTheme);

    return (
        <Row className={`${theme} header py-1`}>
            <Col className='d-flex align-items-end justify-content-end header-link'>
                <a href='https://github.com/effieguenther/portfolio-website/tree/master' target='_blank'>see the code behind this website</a>
                <Button className='btn-sm my-2 me-2'>night mode</Button>
            </Col>
        </Row>
    )
};

export default Header;
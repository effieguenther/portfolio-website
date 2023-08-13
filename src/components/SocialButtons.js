import { Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import upworkLogo from '../assets/img/upwork-2.svg'

const SocialButtons = () => {
    return (
        <div className='mt-2 d-flex justify-content-start'>
            <Button className='social' href='https://codesandbox.io/dashboard/recent?workspace=70c2a9ba-139f-456c-958f-96c55a09dcfa' target='_blank'>
                <FontAwesomeIcon icon={faSquare} size='xl' />
            </Button>
            <Button id='upwork-button' className='social' href='' target='_blank'>
                <img src={upworkLogo} alt='upwork logo' height='20px'/> 
            </Button>
            <Button className='social'href='' target='_blank'> 
                <FontAwesomeIcon icon={faGithub} size='xl'/>
            </Button>
            <Button className='social' href='' target='_blank'> 
                <FontAwesomeIcon icon={faLinkedin} size='xl'/>
            </Button>
        </div>
    );
}

export default SocialButtons;

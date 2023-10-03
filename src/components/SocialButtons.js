import { Button, Row, Col } from 'reactstrap';
import { useTrail, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const SocialButtons = () => {
    
    const items = [
        {
            icon: faSquare,
            href: 'https://codesandbox.io/dashboard/recent?workspace=70c2a9ba-139f-456c-958f-96c55a09dcfa',
        },
        {
            icon: faBriefcase,
            href: 'https://www.upwork.com/freelancers/~018f785b41a5272472',
        },
        {
            icon: faGithub,
            href: 'https://github.com/effieguenther',
        },
        {
            icon: faLinkedin,
            href: 'https://www.linkedin.com/in/effieguenther/',
        }
    ]
    
    
    const trail = useTrail(items.length, {
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: { duration: 500 },
        delay: 300,
    });

    return (
        <div className='mt-2 d-flex justify-content-start'>
            {
                trail.map((props, idx) => (
                    <animated.button 
                        style={{ ...props, transition: 'none', animation: 'none' }} 
                        className='social btn' 
                        href={items[idx].href} 
                        target='_blank'
                    >
                        <FontAwesomeIcon icon={items[idx].icon} size='xl' />
                    </animated.button>
                ))
            }
        </div>
    );
}

export default SocialButtons;

import { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        const scrollTop = window.scrollYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>
            {
                isVisible && (
                    <Button className='back-to-top-btn' onClick={scrollToTop}>
                        <FontAwesomeIcon icon={faArrowUp} size='xl'/>
                    </Button>
                )
            }
        </>
    )
};

export default BackToTop;
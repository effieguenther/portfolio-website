import sun from '../assets/img/sun.svg';
import moon from '../assets/img/moon.svg';
import { useTransition, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

const SunAndMoon = ({ currentTheme }) => {
    const [image, setImage] = useState(sun);

    const transitions = useTransition([image], {
        from: { opacity: 0, transform: 'translateY(200%) translateX(-150%)' },
        enter: { opacity: 1, delay: 100, transform: 'translateY(0px) translateX(0%)' },
        leave: { opacity: 0, transform: 'translateY(200%) translateX(150%)' },
        config: { duration: 450},
        exitBeforeEnter: true
    })

    useEffect(() => {
        setImage(currentTheme === 'dark' ? moon : sun);
    }, [currentTheme]);

    return (
        <>
            {
                transitions((styles, item) => (
                    <animated.img 
                        src={item} 
                        style={styles} 
                        alt={currentTheme === 'light' ? 'sun' : 'moon'} 
                        className='img-fluid'
                    />
                ))
            }
        </>
    )
};

export default SunAndMoon;
import { faHtml5, faCss3Alt, faSquareJs, faPython, faReact, faBootstrap, faNpm, faChrome, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import { faMobileButton, faDatabase, faCloud, faImage, faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons'

export const skills = {
    languages: [
        {
        icon: faHtml5,
        skill: 'HTML'
        },
        {
            icon: faCss3Alt,
            skill: 'CSS'
        },        {
            icon: faSquareJs,
            skill: 'JavaScript'
        },
        {
            icon: faPython,
            skill: 'python'
        }
    ],

    frameworks:[
        {
            icon: faReact,
            skill: 'React'
        },
        {
            icon: faReact,
            skill: 'Redux'
        },        {
            icon: faMobileButton,
            skill: 'React Native'
        },
        {
            icon: faBootstrap,
            skill: 'Bootstrap'
        },
        {
            icon: faDatabase,
            skill: 'Mongoose'
        },
        {
            icon: faSquareJs,
            skill: 'Express'
        },
        {
            icon: faNpm,
            skill: 'npm'
        }
    ],
    databases: [
        {
            icon: faDatabase,
            skill: 'MongoDB'
        },
        {
            icon: faSquareJs,
            skill: 'Node'
        },
        {
            icon: faCloud,
            skill: 'Firestore'
        }
    ],
    apis: [
        {
            icon: faCloud,
            skill: 'Firebase'
        },
        {
            icon: faChrome,
            skill: 'Chrome Extension'
        }
    ],
    visual: [
        {
            icon: faImage,
            skill: 'Photoshop'
        },
        {
            icon: faPaintBrush,
            skill: 'Illustrator'
        }
    ],
    scripting: [
        {
            icon: faCode,
            skill: 'bash shell'
        }
    ],
    versionControl: [
        {
            icon: faGithub,
            skill: 'Git'
        }
    ]

}



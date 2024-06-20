import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faFlask, faFlaskVial } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                I am a passionate full stack developer mainly looking for a role in an engineering team for a med-tech company for an opportunity to utilize my background in healthcare and software development.
                </p>
            <p align="LEFT">
                I am a versatile, adaptable and team player with excellent communication skills.
            </p>
            <p>
                If I had to define myself I would say that I am a man of many interests and hobbies! I love to immerse myself in different cultures, breakdance, listen to music and spend time with family and friends.
            </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        <FontAwesomeIcon icon={faPython} color="#CC6699" />
                        <FontAwesomeIcon icon={faFlask} color="#28A4D9" />
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

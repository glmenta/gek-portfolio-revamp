import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['p', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}
                    />
                </h1>
                <p>
                    Here are some of the projects I have worked on. Feel free to check them out!
                </p>
                <div className='projects'>
                    <div className='keebcraft'>
                        Project1
                        <NavLink></NavLink>
                    </div>
                    <div className='nostaljams'>
                        Project2
                    </div>
                    <div className='animebnb'>
                        Project3
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects

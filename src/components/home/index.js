import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { Loader } from 'react-loaders';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e', 'r', 'y', 'k', 'o']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} idx={15}
                />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray} idx={22}/>
                </h1>
                <h2>Full Stack Developer / Healthcare Background</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Home

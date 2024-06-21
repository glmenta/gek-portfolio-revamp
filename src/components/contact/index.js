import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                </h1>
                <p>
                    If you want to get in touch with me, please use the form below. I will get back to you as soon as possible.
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required />
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='icons-container'>
                <div className='icons'>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/geryko-menta-36a0b0215/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://github.com/glmenta'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </div>
            </div>
        </div>
        <Loader type="ball-clip-rotate-pulse" />
        </>
    )
}

export default Contact

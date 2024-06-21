import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const workExp = {
        exp: [
            {
                role: "Physical Therapy Aide",
                company: "Movement For Life",
                companylogo: "./images/movementforlifelogo.png",
                date: "August 2021 – September 2022",
                desc: "Assisted in guiding patients through specific exercises and routines designed for their recovery.",
                descBullets: [
                    "Assisted in managing patient data and electronic health records (EHR) systems, demonstrating attention to detail and familiarity with handling sensitive information.",
                    "Collaborated with a multidisciplinary team to support the development and implementation of customized treatment plans, showcasing teamwork and communication skills."
                ]
            },
            {
                role: "Food Staff",
                company: "Fish's Wild Island Grill",
                companylogo: "./images/fishswildlogo.png",
                date: "August 2019 – March 2020",
                desc: "Enhanced multitasking abilities, managing multiple orders and customer requests efficiently.",
                descBullets: [
                    "Operated point-of-sale systems and cash registers with accuracy, showcasing proficiency in handling financial transactions.",
                    "Adapted to diverse customer needs and preferences, demonstrating flexibility and a customer-centric mindset."
                ]
            }
        ]
    }

    const projectExp = {
        exp: [
            {
                title: "AnimeBnb",
                subtitle: "Created a comprehensive web application embodying the essential features of Airbnb but infused with an anime flair! This project utilized the Express.js framework for backend development, managing CRUD functionalities and API routes. Meanwhile, React.js was employed for frontend development, ensuring seamless rendering and utilization of components.",
                // image: "./images/animebnbfavico.ico", // Changed to relative path
                imageAlt: "AnimeBnb Logo",
                footerLink: [
                    { name: "View AnimeBnb in Action", url: "https://airbnb-project-92yx.onrender.com" }
                ]
            },
            {
                title: "Nostaljams",
                subtitle: "Collaborated with a dynamic team of web developers to craft a captivating full-stack application. Leveraging the dynamic trio of React, AWS, and Flask, our creation empowers users to not only create, edit, and share their musical masterpieces but also dive into a rich, immersive world of personalized playlists. This project seamlessly blends the realms of creativity and technology, offering a unique musical journey for every user.",
                // image: "./images/soundcloudIcon.png", // Changed to relative path
                imageAlt: "Soundcloud Clone Logo",
                footerLink: [
                    { name: "View Nostaljams in Action", url: "https://soundcloudclone.onrender.com/" }
                ]
            },
            {
                title: "KeebCraft",
                subtitle: "Introducing Keebcraft, your ultimate destination for crafting and managing personalized mechanical keyboards! Our Python and Flask-powered backend ensures seamless data management, user authentication, and comprehensive CRUD operations for modifying custom keyboards. The user-friendly interface, designed with advanced CSS concepts like Flexbox and Grid, guarantees intuitive navigation and efficient organization of mechanical keyboard components. Elevating the creative process, Keebcraft integrates real-time visualization features through Redux and React, empowering users to design their custom keyboard builds with ease. Dive into a world where crafting your perfect keyboard is an interactive and fluid experience, courtesy of Keebcraft.",
                // image: "./images/keebcraft.ico", // Changed to relative path
                imageAlt: "KeebCraft Logo",
                footerLink: [
                    { name: "View KeebCraft in Action", url: "https://keebcraft-capstone.onrender.com" }
                ]
            }
        ]
    }
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

            </div>
            <div className='projects-cont'>
                <div>

                </div>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default About

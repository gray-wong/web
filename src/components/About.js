import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Col, Container, Row } from "react-bootstrap"
import Back from "./Back"
import Profile from "../assets/images/me.jpg"
import './About.scss'
import { AnimatePresence, AnimateSharedLayout, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
};

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
  return (
    <Container className="about g-0">
        <br/>
        <h1>About</h1>
        <Row className="about-desc g-0">
        <Col lg={6} md={12} className="about-self">
            {/* <AnimateSharedLayout type="crossfade"> */}
            {/* <AnimatePresence> */}
            <motion.img
                src={Profile}
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
                // initial={{opacity: 0.2}}
                // exit={{opacity: 0.2}}
                // animate={{opacity: 1}}
                // transition={{ duration: 0.8 }}
              />
              {/* </AnimatePresence> */}
              {/* </AnimateSharedLayout> */}
            {/* <img src={Profile} /> */}
            <div className='bold-section'>Hi there!</div> I'm May-Ann Wong, but I also go by the name Gray. As someone with a colorful experience in the realm of HCI, I bring different flavors and perspectives to my perspective on research and design.
            <br/>
            These are views I've collected from my multidisciplinary undergraduate major of <div className='keyword'>Symbolic Systems</div> (a combination of computer science, HCI, HCD, psychology, linguistics, philosophy, machine learning, and more) and from my other personal identities (such as being a first-generation college graduate, a woman in STEM, and an Asian-American). As a result, I have been able to train myself to view and experience things from different perspectives and different angles so as to be more <div className='keyword'>accessible</div> and <div className='keyword'>inclusive</div> and to emphasize <div className='keyword'>human connection</div> in what I build.
        </Col>
        <Col lg={6} md={12}>
            <Row className="about-skills">
                <h3>skills</h3>
                <Col xs={6}>
                    <ul>
                        <li>Java</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>MongoDB</li>
                        <li>SQLite</li>
                        <li>Android Studio</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </Col>
                <Col xs={6} className="about-margin">
                    <ul>
                        <li>Figma</li>
                        <li>Sketch</li>
                        <li>ProtoPie</li>
                        <li>InVision</li>
                        <li>Zeplin</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe InDesign</li>
                        <li>Blender</li>
                        <li>Autodesk 3ds Max</li>
                        <li>Keynote, Pages, Numbers</li>
                        <li>Microsoft Suite</li>
                    </ul>
                </Col>
            </Row>
        </Col>
        </Row>
        <Row className='justify-content-center g-0'>
            <Col className="about-exp" lg={9}>
                <h2>experiences</h2>
                <ul className='bold-section'>
                    <li>user research</li>
                    <li>ux/ui design</li>
                    <li>web & app design</li>
                    <li>product design</li>
                    <li>service design</li>
                    <li>wireframing</li>
                    <li>rapid iteration</li>
                    <li>prototyping</li>
                    <li>usability testing</li>
                    <li>branding</li>
                    <li>copywriting & communication</li>
                    <li>information architecture</li>
                    <li>3d modeling</li>
                    <li>front-end web development</li>
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

export default About

/* <Row className="about-classes">
            <h2>relevant coursework</h2>
            <Col md>
                <h3>COMPUTER SCIENCE</h3>
                <ul>
                    <li>CS 107: COMPUTER ORGANIZATION & SYSTEMS</li>
                    <li>CS 108: OBJECT-ORIENTED SYSTEMS DESIGN</li>
                    <li>CS 109: INTRODUCTION TO PROBABILITY FOR COMPUTER SCIENTISTS</li>
                    <li>CS 110: PRINCIPLES OF COMPUTER SYSTEMS</li>
                    <li>CS 142: WEB APPLICATIONS</li>
                    <li>CS 148: INTRODUCTION TO COMPUTER GRAPHICS & IMAGING</li>
                    <li>CS 161: DESIGN & ANALYSIS OF ALGORITHMS</li>
                    <li>CS 238: DECISION MAKING UNDER UNCERTAINTY</li>
                    <li>MATH 51: LINEAR ALGEBRA, MULTIVARIABLE CALCULUS, & MODERN APPLICATIONS</li>
                    <li>STATS 202: DATA MINING & ANALYSIS</li>
                </ul>
            </Col>
            <Col md>
                <h3>HUMAN-COMPUTER INTERACTION & DESIGN</h3>
                <ul>
                    <li>CS 147: INTRODUCTION TO HUMAN-COMPUTER INTERACTION DESIGN</li>
                    <li>CS 247G: INTRODUCTION TO GAME DESIGN</li>
                    <li>CS 247S: SERVICE DESIGN</li>
                    <li>CS 199: INDEPENDENT WORK (PROF. CHRISTINA WODTKE)</li>
                    <li>EDUC 342: CHILD DEVELOPMENT & NEW TECHNOLOGIES</li>
                    <li>LINGUIST 121A: THE SYNTAX OF ENGLISH</li>
                    <li>PSYCH 140: INTRODUCTION TO PSYCHOLINGUISTICS</li>
                    <li>LINGUIST 180: FROM LANGUAGES TO INFORMATION</li>
                    <li>PSYCH 70: SELF & SOCIETY: INTRODUCTION TO SOCIAL PSYCHOLOGY</li>
                    <li>SYMSYS 245: COGNITION IN INTERACTION DESIGN</li>
                </ul>
            </Col>
        </Row> */
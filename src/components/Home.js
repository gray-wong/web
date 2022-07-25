import React from 'react'
// import ReactDOM from 'react-dom'
import { Col, Container, Row } from 'react-bootstrap';
import './Home.scss';
import About from './About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faArrowDown, faArrowRight, faArrowsUpToLine, faAward, faHandPointDown, faHandPointUp, faHandPeace } from '@fortawesome/free-solid-svg-icons'
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons'
import Process from './Process';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Logo from '../assets/images/logo-flower.png';
import { useRef } from 'react';
import { motion } from 'framer-motion'

const Home = () => {
  const about = useRef(null);
  const process = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className='big-cont'>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js" integrity="sha512-VEBjfxWUOyzl0bAwh4gdLEaQyDYPvLrZql3pw1ifgb6fhEvZl9iDDehwHZ+dsMzA0Jfww8Xt7COSZuJ/slxc4Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      {/* <RotatingSquare ariaLabel="rotating-square" visible={true} color="grey" /> */}
      <Container fluid className='g-0 cont'>
        
      {/* <div className='point-down'>
        <FontAwesomeIcon icon={faHandPointDown} border inverse size="3x" />
      </div> */}
      <Row className='home-header g-0'>
        <Col sm={6} className='home-left g-0 align-self-center'>
          <div className='fName'>
            <Row>
                <Col>M</Col>
                <Col><motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{ delay: 0.3, duration: 1 }}
                  >a</motion.div></Col>
                <Col><motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{ delay: 0.5, duration: 1 }}
                  >y</motion.div></Col>
            </Row>
            <Row>
                <Col><motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{ delay: 0.7, duration: 1 }}
                  >A</motion.div></Col>
                <Col>n</Col>
                <Col>n</Col>
            </Row>
          </div>
            <Row>
                <Col xs={4} className='gray'>
                  <motion.div
                  initial={{opacity: 0, marginTop: '50px'}}
                  animate={{opacity: 1, marginTop: '0px'}}
                  transition={{ delay: 1, duration: 1 }}
                  >
                  "Gray"
                  </motion.div>
                  </Col>
          
            
                <Col xs={8} className='lName'>
                    <Row>
                        <Col><motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{ delay: 1.5, duration: 1 }}
                  >W</motion.div></Col>
                        <Col>o</Col>
                    </Row>
                    <Row>
                        <Col>n</Col>
                        <Col><motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{ delay: 1.8, duration: 1 }}
                  >g</motion.div></Col>
                    </Row>
                </Col>

            </Row>
            <Row className='home-roles'>
              <motion.div
              initial={{opacity: 0, marginTop: '-30px'}}
              animate={{opacity: 1, marginTop: '0px'}}
              transition={{ delay: 2.5, duration: 1 }}
              >
                Experience through value and hue.</motion.div>
              {/* <p>product design, ux/ui, user research</p> */}
          </Row>
          
          <Row className='d-block d-sm-none'>
            <Col><motion.img src={Logo}
            initial={{opacity: 0, marginTop: '-30px'}}
            animate={{opacity: 1, marginTop: '0px'}}
            transition={{ delay: 2.3, duration: 1 }}
            /></Col>
          </Row>
          <Row className='d-block'>
            <Col>
            <div style={{fontSize: '1.5rem'}}>
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 2.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5}}>
                {/* transition={{delay: 2.5, duration: 2}}> */}
                <FontAwesomeIcon icon={faHandPointDown} size="xl" className='arrow' />
              </motion.div>
            </div>
            </Col>
          </Row>

        </Col>
        <Col sm={6} className='home-right g-0 d-none d-sm-block'>
              <motion.div
                className='home-window'
                src={Logo}
                initial={{opacity: 0, top: '-10%'}}
                animate={{opacity: 1, top: '0%'}}
                transition={{ duration: 0.8, delay: 2.3 }}
                whileHover={{clipPath: 'circle(68.0% at 25% 50%)', transition: { duration: 0.5 }}}
              />
          <motion.div className='home-nav'
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            {/* <p>QUICK LINKS:</p> */}
              <a onClick={() => scrollToSection(about)}>About</a>
              <div className='nav-spacer'></div>
              <a onClick={() => scrollToSection(process)}>Process</a>
              <div className='nav-spacer'></div>
              <a onClick={() => scrollToSection(portfolio)}>Portfolio</a>
              <div className='nav-spacer'></div>
              <a onClick={() => scrollToSection(contact)}>Contact</a>
            </motion.div>
        </Col>
      </Row>
      <div ref={about}><About /></div>
      <div ref={process}><Process /></div>
      <div ref={portfolio}><Portfolio /></div>
      </Container>
      
      <div ref={contact}><Contact /></div>
      </div>
  )
}

export default Home
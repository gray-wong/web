import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Thinker1 from "../assets/images/about/thinker1.png"
import Thinker2 from "../assets/images/about/thinker2.png"
import Thinker3 from "../assets/images/about/thinker3.png"
import './Process.scss'
import { AnimatePresence, AnimateSharedLayout, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const variants1 = {
    visible: { opacity: 1, marginTop: '25px', transition: { duration: 1 } },
    hidden: { opacity: 0, marginTop: '0px' }
};
const variants2 = {
  visible: { opacity: 1, marginTop: '25px', transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0, marginTop: '0px' }
};
const variants3 = {
  visible: { opacity: 1, marginTop: '25px', transition: { duration: 1, delay: 1 } },
  hidden: { opacity: 0, marginTop: '0px' }
};
const Process = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
      if (inView) {
          controls.start("visible");
      }
  }, [controls, inView]);
  return (
    <>
    <Container className='g-0 process'>
      <Row className='about-process'>
      <Col lg={6}>
        <Row><h1>Process</h1></Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={12} md={6} sm={4}>
              <motion.img
                src={Thinker1}
                alt="A sketch of Auguste Rodin's The Thinker statue."
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants1}
              />
                {/* <img src={Thinker1} /> */}
              </Col>
              <Col lg={12} md={6} sm={8} className='process-part'>
                <div className='number'>01.</div>
                When I create, I use a <i>gray</i>scale (get it?) approach—I strip a problem down to its core to understand its simplest components and the relationships and touchpoints involved. While researching, I especially target extreme users and users who are typically overlooked and left out, as often my most valuable insights come from this demographic.
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={12} md={6} sm={4}>
                <motion.img
                  src={Thinker2}
                  alt="The Thinker sketch, more refined."
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={variants2}
                />
                {/* <img src={Thinker2} alt="The Thinker sketch, more refined."/> */}
              </Col>
              <Col lg={12} md={6} sm={8} className='process-part'>
                <div className='number'>02.</div>
                To do so, I inspect the mental models and core assumptions of users and probe areas of friction and anything missing from existing solutions. To me, it is vital to understand how users interact with a product and their relationship with it in order to design more effectively and efficiently.
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col lg={6} className='bold-section'>
        <Row>
          <Col lg={12} md={6} sm={4}>
            <motion.img
                  src={Thinker3}
                  alt="The Thinker, shaded and colored in."
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={variants3}
                />
            {/* <img src={Thinker3} alt="The Thinker, shaded and colored in."/> */}
          </Col>
          <Col lg={12} md={6} sm={8}>
            <div className='number'>03.</div>
            I build from this foundational knowledge, adding details and features to scaffold over gaps in existing solutions. For each scaffolding, I research and test and evaluate their efficacy in bringing about a comprehensive experience and user flow. This results in an end product that truly <div className='red'>understands</div> and <div className='red'>supports</div> its users while still having the typical aesthetically pleasing cosmetics to engage users. 
          </Col>
        </Row>
      </Col>
      </Row>
    </Container>
    </>
  )
}

export default Process
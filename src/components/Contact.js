import React from 'react'
import ReactDOM from 'react-dom'
import { Col, Container, Row } from 'react-bootstrap'
import './Contact.scss'
import LogoPlain from '../assets/images/grayLogo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import useAnalyticsEventTracker from '../useAnalyticsEventTracker';

const Contact = () => {
  const gaEventTracker = useAnalyticsEventTracker('Contact');
  return (
    <Container className="contact g-0">
      <Row>
        <Col>
      <img src={LogoPlain} className='end-logo' />
        </Col>
      </Row>
        <Row className='g-0 justify-content-center'>
          <Col sm={10} lg={6} className='contact-message bold-section'>
            <p>
              Thank you for your interest!<br/>
              I can be contacted at <div className='red keyword'>mayannw 'at' stanford.edu</div><br/>
              Please do not hesitate to reach out to me.
              </p>
              <a href="/"  onClick={()=>gaEventTracker('resume')}>
              <Row className='contact-nav'>
                <Col className='align-self-center'>
                Resume (PDF)
                </Col>
                <Col className='align-self-center'>
                  <FontAwesomeIcon icon={faHandPointRight} inverse size="xl" />
                </Col>
              </Row>
              </a>
              <br/>
              <br/>
              <a href="https://www.linkedin.com/in/gray-wong/" onClick={()=>gaEventTracker('linkedin')}>
              <Row className='contact-nav'>
                <Col className='align-self-center'>
                  LinkedIn
                </Col>
                <Col className='align-self-center'>
                  <FontAwesomeIcon icon={faHandPointRight} inverse size="xl" />
                </Col>
              </Row>
              </a>
          </Col>
          {/* <Col sm={6} className='contact-nav'>
            <Row>
              <Col>
              <ul>
                <li>hi horizontal lines across</li>
                <li>hi</li>
              </ul><a href="/">Resume (PDF)</a><br/><a href="/">Portfolio (PDF)</a><br/><a href="/">LinkedIn</a></Col>
            </Row>
          </Col> */}
        </Row>
    </Container>
  )
}

export default Contact
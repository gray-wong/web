import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';
import { Col, Row } from 'react-bootstrap'
import './Next.scss'


const Next = ({ next, subtitle, link }) => {
  // let url = "localhost:3000/web" + link
  let url = "/" + link

  console.log(url)
  return (
    <Link to={url} className='next-link'>
    {/* <a href={link} className='next-link'> */}
    <div className='next-article'>
        <h3>Next article:</h3>
        <Row className='justify-content-center next-link'>
            <Col md={8} sm={7} xs={7}>
            <div className='next-name'>{next}</div>
            <br />
            <div className='next-subtitle'>{subtitle}</div>
            </Col>
            <Col md={2} sm={1} xs={1}>
                <FontAwesomeIcon icon={faHandPointRight} color="#333333" size="2x" />
            </Col>
        </Row>
    </div>
    {/* </a> */}
    </Link>
  )
}

export default Next
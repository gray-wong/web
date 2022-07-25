import React from 'react'
// import ReactDOM from 'react-dom'
import { Col, Row } from 'react-bootstrap';
import './Entry.scss';

const Entry = ({ num, project, tags }) => {
    let data = Array.from(tags)
    let res = ""
    for (let i = 0; i < data.length - 1; i++) {
        res += data[i] + ", "
    }
    res += data[data.length - 1]
    let url = ""
    for (let i = 0; i < project.length; i++) {
        if (project[i] === ' ') {
            url += "-"
        } else {
            url += project[i].toLowerCase()
        }
    }
  return (
    <div className='portfolio-entry'>
    <a href={url} className='entry-row'>
    <Row className='g-0'>
        <Col xs={4} lg={1} className='entry-col num'>{num}
        </Col>
        <Col xs={8} lg={4} className='entry-col entry'>{project}
        </Col>
        <Col lg={7} className='entry-col entry-desc align-self-center'>{res}
        </Col>
    </Row>
    </a>
    </div>
  )
}

export default Entry
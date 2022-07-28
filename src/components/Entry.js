import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './Entry.scss';
import useAnalyticsEventTracker from '../useAnalyticsEventTracker';


const Entry = ({ num, project, tags }) => {
  const gaEventTracker = useAnalyticsEventTracker('Portfolio');

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
    url += "#top"
  return (
    <div className='portfolio-entry'>
    <Link to={url} className='entry-row' onClick={()=>gaEventTracker({url})}>
    {/* <a href={url} className='entry-row'> */}
    <Row className='g-0'>
        <Col xs={4} lg={1} className='entry-col num'>{num}
        </Col>
        <Col xs={8} lg={4} className='entry-col entry'>{project}
        </Col>
        <Col lg={7} className='entry-col entry-desc align-self-center'>{res}
        </Col>
    </Row>
    {/* </a> */}
    </Link>
    </div>
  )
}

export default Entry
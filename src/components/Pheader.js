import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Pheader = ({ name, date, subtitle, role }) => {
    let res = "";
    if (name.includes(" ")) {
        let arr = name.split(" ");
        for (let i = 0; i < arr.length - 1; i++) {
            res += arr[i] + "\n";
        }
        res += arr[arr.length - 1];
    }
  return (
    <Row className='proj-header'>
        <Col md={6}>
        <h1>{res}</h1>
        </Col>
        <Col md={6} className='align-self-center'>
        <ul className='proj-stats'>
            <li>{date}</li>
            <li>{subtitle}</li>
            <li>{role}</li>

        </ul>
        </Col>
    </Row>
  )
}

export default Pheader
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import './Back.scss'
import { motion } from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link';

// import ReactDOM from 'react-dom'
const Back = ({ location }) => {
  return (
    <div>
    <Link to="/#portfolio" style={{ color: '#336f59' }} className='back-link'>
      <motion.div className='back'
      animate={{color: '336f59'}}
      initial={{ marginLeft: '0px', color: '#B9BBBE' }}
      whileHover={{
        marginLeft: '-20px',
        color: '#336f59',
        transition: { duration: 1 },
      }}
      >
        <div className='back-link'>
      <FontAwesomeIcon icon={faHandPointLeft} className='back-arrow' />BACK TO HOME
      </div>
      </motion.div>
      </Link>
      </div>
  )
}

export default Back
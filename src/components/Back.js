import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import './Back.scss'
import { motion } from 'framer-motion'

// import ReactDOM from 'react-dom'
const Back = ({ location }) => {
  return (
      <motion.div className='back'
      animate={{color: '336f59'}}
      initial={{ marginLeft: '0px', color: '#B9BBBE' }}
      whileHover={{
        marginLeft: '-20px',
        color: '#336f59',
        transition: { duration: 1 },
      }}
      >
      <a href="/"><FontAwesomeIcon icon={faHandPointLeft} className='back-arrow' />BACK TO HOME</a>
      <p><br/></p>
      </motion.div>
  )
}

export default Back
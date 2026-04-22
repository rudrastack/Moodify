import React from 'react'
import Formgroup from '../components/Formgroup'
import '../style/register.scss'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Register = () => {
  return (
    <motion.main
      className='register-page'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className='form-container'
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Register</h1>

        <form>
          <Formgroup label="Username" placeholder="Enter your username" />
          <Formgroup label="Email" placeholder="Enter your email" />
          <Formgroup label="Password" placeholder="Enter your password" />

          <motion.button 
            className='button' 
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Register
          </motion.button>
        </form>
      </motion.div>

      <p>
        Already have an account?{" "}
        <motion.span whileHover={{ scale: 1.1 }}>
          <Link to="/login" className="link">
            Login
          </Link>
        </motion.span>
      </p>
    </motion.main>
  )
}

export default Register
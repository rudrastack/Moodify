import React from 'react'
import Formgroup from '../components/Formgroup'
import '../style/login.scss'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Login = () => {
  return (
    <motion.main
      className='login-page'
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
        <h1>Login</h1>
        <form>
          <Formgroup label="Username" placeholder="Enter your username" />
          <Formgroup label="Password" placeholder="Enter your password" />
          
          <motion.button 
            className='button' 
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Login
          </motion.button>
        </form>
      </motion.div>

      <p>
        Don't have an account?{" "}
        <motion.span whileHover={{ scale: 1.1 }}>
          <Link to="/register" className="link">
            Register
          </Link>
        </motion.span>
      </p>
    </motion.main>
  )
}

export default Login
import React from 'react'
import LoginModal from '../organisms/LoginModal'



const Login : React.FC = () => {

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <LoginModal/>
    </div>
  )
}

export default Login

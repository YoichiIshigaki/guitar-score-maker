import React from 'react'
import { UserInfo } from '../molecule/AuthButton'
import LoginModal from '../organisms/LoginModal'

const Login : React.FC = () => {

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <LoginModal/>
      <UserInfo style={{"margin":"auto"}}/>
    </div>
  )
}

export default Login

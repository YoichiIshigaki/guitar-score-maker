import React,{ useRef,useEffect,useState } from 'react'
import { Magic } from 'magic-sdk';
import { useNavigate } from 'react-router-dom';

const API_KEY = "pk_live_B3D0A79DB1493CA5"


const LoginModal : React.FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [loginEmail, setLoginEmail] = useState<string | null>(null)

  const navigate = useNavigate()

  const handleLogin = async () => {
    // Magic Link Implement
    try{
      const magicEmail = new Magic(API_KEY, { locale: "ja" });
      console.log(loginEmail)
      loginEmail && await magicEmail.auth.loginWithMagicLink({ email: loginEmail })
        // redirect
      navigate("/")
    
    }catch(error){
      console.log(error)
    }

  }


  return (
    <>
<div className="flex items-center justify-center py-10">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            {/* <!-- @csrf --> */}
            <div
              className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
              Login Form
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                required
                autoFocus={true}
                placeholder="Email"
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setLoginEmail(e.target.value)}}
              />
            </div>

            <div className="flex items-center justify-between">
              <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" 
                onClick={() => handleLogin()}>Login</button>
              {/* <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" 
              type="submit" >Login</button> */}
              {/* <a
                className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="/forget-password"
              >
                Forgot Password?
              </a> */}
            </div>
          </div>
          <p className="text-center text-white text-xs">
            &copy;2020 Gau Corp. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default LoginModal

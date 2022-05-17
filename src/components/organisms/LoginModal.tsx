import React,{ useRef,useEffect,useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Config from "../../modules/config/config"

import { AuthButton } from "../molecule/"
import { signInWithPopup } from "firebase/auth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { auth,provider } from "../../modules/firebase/firebase"
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleIcon } from '../SvgComponents';
import { authUserContext } from '../../context/AuthContext';



// const API_KEY = Config.magicLinkPubKey

const LoginModal : React.FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [loginEmail, setLoginEmail] = useState<string>("")
  const [loginPassword, setLoginPassword] = useState<string>("")

  const navigate = useNavigate()

  const authUser = useContext(authUserContext)

  console.log("authUser = ",authUser)

  const handleSignIn = async (e:React.MouseEvent<HTMLButtonElement>) => {
    // Firebase Implement
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      // navigate("/")
      console.log("success!! Sign In")
    } catch (error: any) {
      alert(error.message);
    }
  }

  const handleSignUp = async (e:React.MouseEvent<HTMLButtonElement>) => {
    // Firebase Implement
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
      // navigate("/")
      console.log("success!! Sign Up")

    } catch (error: any) {
      alert(error.message);
    }
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
      console.log("success auth by google")    
      console.log("result = ",result)    
    }).catch((error:any) => {
        // Handle Errors here.
        alert(error)
        console.log("error auth by google")
        // ...
      });
  }

  return (
    <>
    <div className="flex items-center justify-center py-20">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            {/* <!-- @csrf --> */}
            <div
              className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
              {isLogin ? "App Login" : "App Register"}
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
                autoFocus
                placeholder="Email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setLoginEmail(e.target.value)}}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                name="password"
                required
                autoComplete="current-password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setLoginPassword(e.target.value)}}
              />
            </div>
            <div className="flex justify-center">
              <button className="inline-block px-4 py-2 rounded text-white text-center shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit"
                onClick={ isLogin ? (e: React.MouseEvent<HTMLButtonElement>)=>{handleSignIn(e)} : (e)=>{handleSignUp(e)} }
              >
                { isLogin ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div>
              <p className="block py-4 cursor-pointer text-center font-normal text-sm text-violet-600 hover:text-violet-800"
                  onClick={() => setIsLogin(!isLogin)}
              >
					      {isLogin ? "Create new account ?" : "Back to Login"}
              </p>
              <a
                className="block py-4 font-normal text-center text-sm text-blue-500 hover:text-blue-800"
                href=""
              >
                Forgot Password?
              </a>
              <p className='block py-4 font-normal text-center text-sm text-blue-500 justify-center border-t-2 mb-4'>
                SNS アカウントでログイン
              </p>
              <div className="flex justify-center py-4">
              <button onClick={signInWithGoogle} className="mx-2">
                {/* <FontAwesomeIcon className="text-red f0ont-normal m-auto ml-2 text-xl" icon={faGoogle} /> */}
                <GoogleIcon />
              </button>
              <button  className="mx-2">
                <FontAwesomeIcon className="text-red font-normal m-auto ml-2 text-xl" icon={faFacebook} color={"#4267B2"} style={{width:"50px",height:"50px"}}/>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default LoginModal

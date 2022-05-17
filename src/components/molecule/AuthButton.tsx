import React from 'react'
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../modules/firebase/firebase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth"

const AuthButton : React.FC = () => {

  const [user] = useAuthState(auth);

  const signInWithGoogle = () => { 
    signInWithPopup(auth,provider)
  }
  // console.log("user = ",user)

  return (
    <>
      {user ? (
        <>
          {/* <UserInfo/> */}
          <SignOutButton/>
        </>
      ) : (
        <button onClick={signInWithGoogle}>
          <p>Googleでサインイン
            <FontAwesomeIcon className="text-red font-normal m-auto ml-2 text-xl" icon={faGoogle} />
          </p>
        </button>
      )}
    </>
  )
}
type StyleProps = {
  style?: { [key:string] : string | number }
}

const UserInfo : React.FC<StyleProps> = (props) => {
  
  console.log("auth = ",auth)
  const imageUrl = "https://jp.seaicons.com/wp-content/uploads/2015/10/Guitar-icon1.png"
  
  return ( 
    <>
      <div style={props.style} className="bg-white">
      {
        auth.currentUser && (
        <>
          <img
            src={auth.currentUser!.photoURL ?? imageUrl}
            alt={auth.currentUser!.displayName ?? auth.currentUser!.email!}
            height={40} width={40} />
          <p>{auth.currentUser!.displayName ?? auth.currentUser!.email}</p>
        </>
        )
      }
      </div>
    </>
  )
}
const SignOutButton : React.FC = () => {
  
  return (
    <>
      <button onClick={() => auth.signOut()}>
        <p>サインアウト</p>
      </button>
    </>
  )
}


export default AuthButton;

export {SignOutButton,UserInfo}
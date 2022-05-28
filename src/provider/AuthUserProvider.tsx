import { ReactNode,useEffect,useState } from "react";
import { authUserContext,AuthUserContextInterface } from "../context/AuthUserContext";
import { auth } from "../modules/firebase/firebase";
import { Auth,User } from "firebase/auth"

// const authUser: AuthUserContextInterface = {
//   user: ,
// };

type Props = {
  children : ReactNode
}

const AuthUserProvider = ({children}:Props) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);
  useEffect(() => {
    // Firebase Authのメソッド。ログイン状態が変化すると呼び出される
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  return (    
    <authUserContext.Provider value={{currentUser}}>
      {children}
    </authUserContext.Provider>
  );
}

export default AuthUserProvider
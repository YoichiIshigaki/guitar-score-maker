import { ReactNode,useEffect,useState } from "react";
import { authUserContext } from "../context/AuthUserContext";
import { auth } from "../modules/firebase/firebase";
import { User } from "firebase/auth"

// const authUser: AuthUserContextInterface = {
//   user: ,
// };

type Props = {
  children : ReactNode
}

const AuthUserProvider = ({children}:Props) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Firebase Authのメソッド。ログイン状態が変化すると呼び出される
    const unsubscribed = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false)
    });

    return () => {
      unsubscribed();
    };
  }, []);
  // loading中はローディングを表示
  if(loading){
    return (
      <p>loading</p>
    )
  }else{
    return (    
      <authUserContext.Provider value={{currentUser,loading}}>
        {!loading && children}
      </authUserContext.Provider>
    );

  }

}

export default AuthUserProvider
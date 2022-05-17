import { ReactNode } from "react";
import { authUserContext,AuthUserContextInterface } from "../context/AuthUserContext";
import { auth } from "../modules/firebase/firebase";


const authUser: AuthUserContextInterface = {
  user: auth,
};

type Props = {
  children : ReactNode
}

const AuthUserProvider = ({children}:Props) => {

  return (    
    <authUserContext.Provider value={authUser}>
      {children}
    </authUserContext.Provider>
  );
}

export default AuthUserProvider
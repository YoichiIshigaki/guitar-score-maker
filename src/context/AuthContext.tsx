import { createContext,ReactNode } from 'react';
import { auth } from "../modules/firebase/firebase"
import { Auth } from "firebase/auth"

interface AuthUserContextInterface {
  user: Auth | null;
}

export const authUserContext = createContext<AuthUserContextInterface>({user:null});

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
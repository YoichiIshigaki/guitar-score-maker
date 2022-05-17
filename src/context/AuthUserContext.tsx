import { createContext } from 'react';
import { Auth } from "firebase/auth"

export interface AuthUserContextInterface {
  user: Auth | null;
}

export const authUserContext = createContext<AuthUserContextInterface>({user:null});
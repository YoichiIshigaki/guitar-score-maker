import { createContext } from 'react';
import { User } from "firebase/auth"
// import { User } from "firebase";

// export interface AuthUserContextInterface {
//   user: Auth | null;
// }

export interface AuthUserContextInterface {
  currentUser: User | null | undefined;
  loading: boolean;
}

export const authUserContext = createContext<AuthUserContextInterface>({currentUser:undefined,loading:true});
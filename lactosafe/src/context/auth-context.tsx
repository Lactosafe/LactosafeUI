import * as React from "react";
import { AuthType, UserData } from "../config/types/auth-type";

interface Props {
  children: React.ReactNode;
}

// initial value for auth context
const initalValue = {
  userData: null,
  role:'',
  isAuthenticated: false,
  login: (authentication: boolean, userData?: UserData) => {},
  setRole:(role:string)=>{}
};

export const AuthContext = React.createContext<AuthType>(initalValue);
const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = React.useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [role, setrole] = React.useState<string | null>('');
  const login = (authentication: boolean, userData?: UserData | null) => {
    // Authenticate user and set user information and authentication status
    setIsAuthenticated(authentication);
    setUserData(userData ? userData : null);
    
  };

  const setRole = (role: string) => {
    console.log('setRole',setRole)
    setrole(role);
  };
  

  return (
    <AuthContext.Provider value={{ role,userData, isAuthenticated, login ,setRole}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

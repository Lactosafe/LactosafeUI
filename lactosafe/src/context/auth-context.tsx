import * as React from 'react';
import { AuthType, UserData } from '../config/types/auth-type';

interface Props {
	children: React.ReactNode;
}

// initial value for auth context
const initalValue ={
	userData:  null,
	isAuthenticated: false,
	login: (authentication:boolean,userData?: UserData) => {}
}

export const AuthContext = React.createContext<AuthType>(initalValue);
const AuthProvider: React.FC<Props> = ({ children }) => {
	const [userData, setUserData] = React.useState<UserData | null>(null);
	const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
	const login = (authentication:boolean,userData?: UserData| null) => {
		// Authenticate user and set user information and authentication status
		setIsAuthenticated(authentication);
		setUserData(userData ? userData :null);
		
	};

	return <AuthContext.Provider value={{ userData,isAuthenticated, login }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

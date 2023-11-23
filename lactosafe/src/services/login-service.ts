import axios from 'axios';
import { logInRequest } from '../config/types/auth-type';


// Authenticate user login service 
export const logInService = async (userDate: logInRequest): Promise<any> => {
	const url = 'http://localhost:8082/api/v1/signIn';
	return await axios
		.post(url, {email:'ss'})
		.then((response: any) => {
			if (response.status === 200) {
				return response.data;
			}
		})
		
};

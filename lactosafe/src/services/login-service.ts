import axios from 'axios';
import { logInRequest, signUpRequest } from '../config/types/auth-type';


// Authenticate user login service 
export const logInService = async (userData: logInRequest): Promise<any> => {
	const url = 'http://localhost:8082/api/v1/signin'
	return await axios
		.post(url, userData)
		.then((response: any) => {
			if (response.status === 200) {
				return response.data;
			}
		})
		
};


export const signUpService = async (userDate: signUpRequest): Promise<any> => {
	const url = 'http://localhost:8080/lactosafe/v1/apis/signup';
	return await axios
		.post(url, userDate)
		.then((response: any) => {
			if (response.status === 200) {
				return response.data;
			}
		})
		
};


export const getRole=async (email:string | undefined):  Promise<any> => {
	const url = `http://localhost:8080/lactosafe/v1/apis/fetchrole?email=${email} `;
	return await axios
		.get(url)
		.then((response: any) => {
			if (response.status === 200) {
				return response.data;
			}
		})
		
};
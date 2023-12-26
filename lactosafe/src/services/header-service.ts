import axios from "axios";

export const getHeaderFilter=async (role:string | null):  Promise<any> => {
  
	
	const url = `http://localhost:8080/lactosafe/v1/apis/info/${role} `;
	return await axios
		.get(url)
		.then((response: any) => {
			if (response.status === 200) {
				return response.data;
			}
		})
		
};
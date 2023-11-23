export type UserData = {
	id?: String;
	name?: String;
	email?: String;
};

export type AuthType = {
	userData: UserData | null;
	isAuthenticated: boolean;
	login: (authentication:boolean,userData?: UserData) => void;
};

export type logInRequest = {
	email: String;
	password: String;
};

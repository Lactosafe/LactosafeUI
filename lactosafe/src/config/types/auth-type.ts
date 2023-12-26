export type UserData = {
  id?: string;
  name?: string;
  email: string;
};

export type AuthType = {
  role:string | null;
  userData: UserData | null;
  isAuthenticated: boolean;
  login: (authentication: boolean, userData?: UserData) => void;
  setRole: (role:string) => void;
};

export interface logInRequest {
  email: String;
  password: String;
}

export interface signUpRequest extends logInRequest {
  firstName: string;
  lastName: string;
}

export type signUpResponse = {
  statusMessage: string;
  email:string
};

export interface SignInForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignUpForm extends SignInForm {
  firstName: string;
  lastName: string;
}

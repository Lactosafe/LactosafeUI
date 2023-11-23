import * as React from 'react';
import SignInButton from '../../shared/common/sign-in-button';
import SignInInput from '../../shared/common/sign-in-input';
import { CONSTANTS } from '../../config/constants/common-constants';
import './signIn.scss';
import SignInCheckBox from '../../shared/common/sign-in-checkbox';
import SignInText from '../../shared/common/sign-in-text';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SignInLink from '../../shared/common/sign-in-link';
import { SignInForm } from '../../config/types/signIn-type';
import { logInService } from '../../services/login-service';
import { AuthContext } from '../../context/auth-context';
import SignInAlert from '../../shared/common/sign-in-alert';

const initalValue = {
	email: '',
	password: '',
	rememberMe: false,
};
const SignIn: React.FC = () => {
	const [formData, setFormData] = React.useState<SignInForm>(initalValue);
	const [showAlert, setShowAlert] = React.useState<boolean>(false);
	const [alertMsg, setAlertMsg] = React.useState<string>('');
	 const [alertType, setAlertType] = React.useState()
	const { login } = React.useContext(AuthContext);


//   form submittion function
	const signInSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (formData.email && formData.password) {
			// logIn Api call
			logInService({ email: formData.email, password: formData.password })
				.then((response) => {
					if (response.statusCode === 'OK') {
						login(true, response);
						setAlertMessage(true, response.message,'success');
					} else {
						login(false);
						setAlertMessage(true, response.message,'info');
					}
				})
				.catch((error: Error) => {
					login(false);
					setAlertMessage(true, CONSTANTS.ERROR_MSG,'error');
				});
		}
	};

	// function helps to set alert message,type
	const setAlertMessage = (show: boolean, msg: string,type:any) => {
		setShowAlert(show);
		setAlertMsg(msg);
		setAlertType(type)
	};

	
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="sign-in-container">
			<div className="sign-in column">
				<form onSubmit={(e) => signInSubmit(e)} className="sign-in-form">
					<div className="column sign-in-title mt-4">
						<AccountCircleIcon sx={{ fontSize: 50 }} color="secondary"></AccountCircleIcon>
						<SignInText text={CONSTANTS.SIGN_IN} fontSize="xxl" bold></SignInText>
					</div>
					<div className="row mt-3">
						<SignInInput
							variant="outlined"
							label={CONSTANTS.EMAIL_ADDRESS}
							fullWidth
							name="email"
							value={formData?.email}
							onChange={handleInputChange}
						></SignInInput>
					</div>
					<div className="row mt-4">
						<SignInInput
							variant="outlined"
							label={CONSTANTS.PASSWORD}
							name="password"
							type="password"
							value={formData?.password}
							fullWidth
							onChange={handleInputChange}
						></SignInInput>
					</div>
					<div className="row mt-4 remember-me">
						<SignInCheckBox
							name="rememberMe"
							checked={formData?.rememberMe}
							onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
						></SignInCheckBox>
						<div className="remember-me-text">
							<SignInText text={CONSTANTS.REMEMBER_ME} fontSize="m"></SignInText>
						</div>
					</div>
					<div className="row mt-4">
						<SignInButton variant="contained" type="submit" fullWidth>
							{CONSTANTS.SIGN_IN}
						</SignInButton>
					</div>
					<div className="row mt-4">
						<SignInLink href="#">
							<SignInText text={CONSTANTS.SIGN_UP_TEXT} fontSize="m" bold></SignInText>
						</SignInLink>
					</div>
				</form>
				<div className="mt-4">
					<SignInAlert showAlert={showAlert} onClose={() => {setShowAlert(false)}} severity={alertType}>
						<SignInText text={alertMsg} fontSize="m"></SignInText>
					</SignInAlert>
				</div>
			</div>
		</div>
	);
};

export default SignIn;

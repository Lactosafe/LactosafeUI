import * as React from "react";
import { CONSTANTS } from "../../config/constants/common-constants";
import "../signIn/signIn.scss";
import SignUpText from "../../shared/common/lacto-safe-text";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SignUpLink from "../../shared/common/lacto-safe-link";
import { SignUpForm } from "../../config/types/signIn-type";
import { signUpService } from "../../services/login-service";
import { AuthContext } from "../../context/auth-context";
import SignUpAlert from "../../shared/common/lacto-safe-alert";
import { useNavigate } from "react-router-dom";
import LactoSafeButton from "../../shared/common/lacto-safe-button";
import LactoSafeText from "../../shared/common/lacto-safe-text";
import LactoSafeInput from "../../shared/common/lacto-safe-input";
import { signUpResponse } from "../../config/types/auth-type";

const initalValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  rememberMe: false,
};
const SignUp: React.FC = () => {
  const [formData, setFormData] = React.useState<SignUpForm>(initalValue);
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const [alertMsg, setAlertMsg] = React.useState<string>("");
  const [alertType, setAlertType] = React.useState();
  const navigate = useNavigate();

  const { login } = React.useContext(AuthContext);

  //   form submittion function
  const signUpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password
    ) {
      // logIn Api call
      signUpService(formData)
        .then((response: signUpResponse) => {
          console.log('response',response)
          if (response?.statusMessage) {
           
            console.log('response?.email',response?.email)
            login(true,{email:response?.email});
            navigate("/home");
          }
        })
        .catch((error: Error) => {
          login(false);
          setAlertMessage(true, CONSTANTS.ERROR_MSG, "error");
        });
    }
  };

  // function helps to set alert message,type
  const setAlertMessage = (show: boolean, msg: string, type: any) => {
    setShowAlert(show);
    setAlertMsg(msg);
    setAlertType(type);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in column">
        <form onSubmit={(e) => signUpSubmit(e)} className="sign-in-form">
          <div className="column sign-in-title mt-4">
            <AccountCircleIcon
              sx={{ fontSize: 50 }}
              color="secondary"
            ></AccountCircleIcon>
            <LactoSafeText
              text={CONSTANTS.SIGN_UP}
              fontSize="xxl"
              bold
            ></LactoSafeText>
          </div>
          <div className="row mt-4">
            <LactoSafeInput
              variant="outlined"
              label={CONSTANTS.FIRST_NAME}
              fullWidth
              name="firstName"
              value={formData?.firstName}
              onChange={handleInputChange}
            ></LactoSafeInput>
            <div>&nbsp;</div>
            <LactoSafeInput
              variant="outlined"
              label={CONSTANTS.LAST_NAME}
              fullWidth
              name="lastName"
              value={formData?.lastName}
              onChange={handleInputChange}
            ></LactoSafeInput>
          </div>
          <div className="row mt-4">
            <LactoSafeInput
              variant="outlined"
              label={CONSTANTS.EMAIL_ADDRESS}
              fullWidth
              name="email"
              value={formData?.email}
              onChange={handleInputChange}
            ></LactoSafeInput>
          </div>
          <div className="row mt-4">
            <LactoSafeInput
              variant="outlined"
              label={CONSTANTS.PASSWORD}
              name="password"
              type="password"
              value={formData?.password}
              fullWidth
              onChange={handleInputChange}
            ></LactoSafeInput>
          </div>

          <div className="row mt-4">
            <LactoSafeButton variant="contained" type="submit" fullWidth>
              {CONSTANTS.SIGN_UP}
            </LactoSafeButton>
          </div>
          <div className="login-link row mt-4">
            <SignUpLink
              component="button"
              variant="body2"
              onClick={() => {
                navigate("/signin");
              }}
            >
              <SignUpText
                text={CONSTANTS.SIGN_IN_TEXT}
                fontSize="m"
                bold
              ></SignUpText>
            </SignUpLink>
          </div>
        </form>
        <div className="mt-4">
          <SignUpAlert
            showAlert={showAlert}
            onClose={() => {
              setShowAlert(false);
            }}
            severity={alertType}
          >
            <SignUpText text={alertMsg} fontSize="m"></SignUpText>
          </SignUpAlert>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

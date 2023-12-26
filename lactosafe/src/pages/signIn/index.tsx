import * as React from "react";
import { CONSTANTS } from "../../config/constants/common-constants";
import "./signIn.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { SignInForm } from "../../config/types/signIn-type";
import { logInService } from "../../services/login-service";
import { AuthContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import LactoSafeText from "../../shared/common/lacto-safe-text";
import LactoSafeInput from "../../shared/common/lacto-safe-input";
import LactoSafeCheckBox from "../../shared/common/lacto-safe-checkbox";
import LactoSafeLink from "../../shared/common/lacto-safe-link";
import LactoSafeAlert from "../../shared/common/lacto-safe-alert";
import LactoSafeButton from "../../shared/common/lacto-safe-button";

const initalValue = {
  email: "",
  password: "",
  rememberMe: false,
};
const SignIn: React.FC = () => {
  const [formData, setFormData] = React.useState<SignInForm>(initalValue);
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const [alertMsg, setAlertMsg] = React.useState<string>("");
  const [alertType, setAlertType] = React.useState();
  const navigate = useNavigate();
  const { login } = React.useContext(AuthContext);

  //   form submittion function
  const signInSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.email && formData.password) {
      // logIn Api call
      logInService({ email: formData.email, password: formData.password })
        .then((response) => {
          if (response.statusCode === "OK") {
            login(true, response);
            setAlertMessage(true, response.message, "success");
          } else {
            login(false);
            setAlertMessage(true, response.message, "info");
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
        <form onSubmit={(e) => signInSubmit(e)} className="sign-in-form">
          <div className="column sign-in-title mt-4">
            <AccountCircleIcon
              sx={{ fontSize: 50 }}
              color="secondary"
            ></AccountCircleIcon>
            <LactoSafeText
              text={CONSTANTS.SIGN_IN}
              fontSize="xxl"
              bold
            ></LactoSafeText>
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
          <div className="row mt-4 remember-me">
            <LactoSafeCheckBox
              name="rememberMe"
              checked={formData?.rememberMe}
              onChange={(e: any) =>
                setFormData({ ...formData, rememberMe: e.target.checked })
              }
            ></LactoSafeCheckBox>
            <div className="remember-me-text">
              <LactoSafeText
                text={CONSTANTS.REMEMBER_ME}
                fontSize="m"
              ></LactoSafeText>
            </div>
          </div>
          <div className="row mt-4">
            <LactoSafeButton variant="contained" type="submit" fullWidth>
              {CONSTANTS.SIGN_IN}
            </LactoSafeButton>
          </div>
          <div className="login-link row mt-4">
            <LactoSafeLink
              component="button"
              variant="body2"
              onClick={() => {
                navigate("/");
              }}
            >
              <LactoSafeText
                text={CONSTANTS.SIGN_UP_TEXT}
                fontSize="m"
                bold
              ></LactoSafeText>
            </LactoSafeLink>
          </div>
        </form>
        <div className="mt-4">
          <LactoSafeAlert
            showAlert={showAlert}
            onClose={() => {
              setShowAlert(false);
            }}
            severity={alertType}
          >
            <LactoSafeText text={alertMsg} fontSize="m"></LactoSafeText>
          </LactoSafeAlert>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

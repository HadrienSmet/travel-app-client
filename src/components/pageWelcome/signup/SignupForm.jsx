import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setSignupData } from "../../../features/signupData.slice";

import EmailDivision from "./EmailDivision";
import PasswordDivision from "./PasswordDivision";
import ButtonUI from "../../ui/ButtonUI";

const useSignupForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [authData, setAuthData] = useState({
        email: "",
        isEmailOk: false,
        isPasswordOk: false,
        password: "",
    });
    const changeEmail = (e) =>
        setAuthData({ ...authData, email: e.target.value });
    const changeIsEmailOk = (boolean) =>
        setAuthData({ ...authData, isEmailOk: boolean });
    const changeIsPasswordOk = (boolean) =>
        setAuthData({ ...authData, isPasswordOk: boolean });
    const changePassword = (e) =>
        setAuthData({ ...authData, password: e.target.value });

    //This function handles the submission of the first signup form
    //@Params { Type: Object } --> the param of the onSubmit event
    //After checking that all the fields have been well filled it creates an object called user and gives it to the redux store
    //And then this function redirects the user to the next step
    const handleSubmission = (e) => {
        e.preventDefault();
        if (authData.isEmailOk === true && authData.isPasswordOk === true) {
            let userData = {
                email: authData.email,
                password: authData.password,
            };
            navigate("/signup-steps");
            dispatch(setSignupData(userData));
        }
    };

    return {
        authData,
        changeEmail,
        changeIsEmailOk,
        changeIsPasswordOk,
        changePassword,
        handleSubmission,
    };
};

const SignupForm = () => {
    const {
        authData,
        changeEmail,
        changeIsEmailOk,
        changeIsPasswordOk,
        changePassword,
        handleSubmission,
    } = useSignupForm();
    const { email, password } = authData;

    return (
        <div id="signup" className="signup-container start-form">
            <form action="" className="signup-form" onSubmit={handleSubmission}>
                <h2>Inscrivez-vous!</h2>
                <EmailDivision
                    email={email}
                    changeEmail={changeEmail}
                    changeIsEmailOk={changeIsEmailOk}
                />
                <PasswordDivision
                    password={password}
                    changePassword={changePassword}
                    changeIsPasswordOk={changeIsPasswordOk}
                />
                <ButtonUI
                    dynamicClass=""
                    buttonContent="Inscription"
                    buttonHandler={handleSubmission}
                />
            </form>
        </div>
    );
};

export default SignupForm;

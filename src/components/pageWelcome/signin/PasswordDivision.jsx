import { FaCheck } from "react-icons/fa";
import InputTextUI from "../../ui/InputTextUI";

const PasswordDivision = ({ password, handlePassword }) => {
    return (
        <div className="signin-container__password-division">
            <div className="signin-container__icons-container">
                {password !== "" && <FaCheck className="signin-icon check" />}
            </div>
            <InputTextUI
                inputType="password"
                value={password}
                dynamicClass=""
                dynamicName="password"
                inputHandler={handlePassword}
                isRequired={true}
            />
        </div>
    );
};

export default PasswordDivision;

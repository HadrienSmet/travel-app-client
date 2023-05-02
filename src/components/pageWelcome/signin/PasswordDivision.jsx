import { FaCheck } from "react-icons/fa";
import MuiInputText from "../../mui/MuiInputText";

const PasswordDivision = ({ password, handlePassword }) => {
    return (
        <div className="signin-container__password-division">
            <div className="signin-container__icons-container">
                {password !== "" && <FaCheck className="signin-icon check" />}
            </div>
            <MuiInputText
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

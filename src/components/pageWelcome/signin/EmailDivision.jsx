import { FaCheck } from "react-icons/fa";
import MuiInputText from "../../mui/MuiInputText";

const EmailDivision = ({ mail, handleMail }) => {
    return (
        <div className="signin-container__email-division">
            <div className="signin-container__icons-container">
                {mail.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) && (
                    <FaCheck className="signin-icon check" />
                )}
            </div>
            <MuiInputText
                inputType="email"
                value={mail}
                dynamicName="Email"
                inputHandler={handleMail}
                isRequired={true}
            />
        </div>
    );
};

export default EmailDivision;

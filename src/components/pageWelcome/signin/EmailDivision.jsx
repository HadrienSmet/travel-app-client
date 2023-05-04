import { FaCheck } from "react-icons/fa";
import InputTextUI from "../../ui/InputTextUI";

const EmailDivision = ({ mail, handleMail }) => {
    return (
        <div className="signin-form__email-division">
            <div className="signin-form__email-division__icons-container">
                {mail.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) && (
                    <FaCheck className="signin-icon check" />
                )}
            </div>
            <InputTextUI
                inputType="email"
                value={mail}
                dynamicClass=""
                dynamicName="Email"
                inputHandler={handleMail}
                isRequired={true}
            />
        </div>
    );
};

export default EmailDivision;

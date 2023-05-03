import { FaCheck } from "react-icons/fa";

import { useMemo } from "react";
import SelectUI from "../../ui/SelectUI";

const AgeDivision = ({ age, changeAge }) => {
    const fillAgeArray = () => {
        let options = [];
        for (let i = 16; i < 101; i++) {
            options.push(i);
        }
        return options;
    };
    const filler = useMemo(() => fillAgeArray(), []);
    return (
        <div className="personal-data-form__age-division">
            <div className="personal-data-form__icons-container">
                {age !== "" && (
                    <FaCheck className="personal-data-form__age-division__check-icon signup-perso-icon check" />
                )}
            </div>
            <SelectUI
                dynamicClass="personal-data-form__input"
                dynamicPlaceholder="Age"
                choices={filler}
                changeChoice={changeAge}
                maxHeight={400}
            />
        </div>
    );
};

export default AgeDivision;

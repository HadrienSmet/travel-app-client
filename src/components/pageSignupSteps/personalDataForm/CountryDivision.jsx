import { FaCheck } from "react-icons/fa";
import SelectUI from "../../ui/SelectUI";
import { useCountry } from "../../../utils/hooks/hooks";

const CountryDivision = ({ country, changeCountry }) => {
    const { countriesArray } = useCountry();

    return (
        <div className="personal-data-form__country-division">
            <div className="personal-data-form__icons-container">
                {country !== "" && (
                    <FaCheck className="personal-data-form__country-division__check-icon signup-perso-icon check" />
                )}
            </div>
            <SelectUI
                dynamicClass="personal-data-form__input"
                dynamicPlaceholder="Pays"
                choices={countriesArray}
                changeChoice={changeCountry}
                maxHeight={400}
            />
        </div>
    );
};

export default CountryDivision;

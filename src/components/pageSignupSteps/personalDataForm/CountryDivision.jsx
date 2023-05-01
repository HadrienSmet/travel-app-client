import { FaCheck } from "react-icons/fa";
import countryList from "react-select-country-list";
import MuiSelect from "../../mui/MuiSelect";
import { useMemo } from "react";

const useCountryDivision = () => {
    const options = useMemo(() => countryList().getData(), []);
    const fillCountryArray = () => {
        let countries = [];
        for (let i = 0; i < options.length; i++) {
            countries.push(options[i].label);
        }
        return countries;
    };
    const countriesArray = fillCountryArray();

    return { countriesArray };
};

const CountryDivision = ({ country, changeCountry }) => {
    const { countriesArray } = useCountryDivision();

    return (
        <div className="personal-data-form__country-division">
            <div className="personal-data-form__icons-container">
                {country !== "" && (
                    <FaCheck className="personal-data-form__country-division__check-icon signup-perso-icon check" />
                )}
            </div>
            <MuiSelect
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

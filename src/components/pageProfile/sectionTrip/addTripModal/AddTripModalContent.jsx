import { useCountry, useYears } from "../../../../utils/hooks/hooks";
import SelectUI from "../../../ui/SelectUI";
import TextareaUI from "../../../ui/TextareaUI";

const durations = [
    "1 Mois",
    "2 Mois",
    "3 Mois",
    "4 Mois",
    "5 Mois",
    "6 Mois",
    "7 Mois",
    "8 Mois",
    "9 Mois",
    "10 Mois",
    "11 Mois",
    "1 Ans",
    "2 Ans",
    "3 Ans",
    "Je me suis perdu",
];

const withFriendsChoices = [
    "Seul(e)",
    "En couple",
    "Aves des ami(e)s",
    "En famille",
];

const AddTripModalContent = ({
    changeCountry,
    changeDuration,
    changeNumber,
    changeChoice,
    details,
    changeDetails,
}) => {
    const { countriesArray } = useCountry();
    const { yearsArray } = useYears();
    return (
        <div className="trip-modal__content">
            <div className="trip-modal__inputs-area">
                <span>Quelle était la destination?</span>
                <SelectUI
                    dynamicClass="trip-modal__input-destination"
                    dynamicPlaceholder="Destination"
                    choices={countriesArray}
                    changeChoice={changeCountry}
                    maxHeight={400}
                />
                <span>Pendant combien de temps?</span>
                <SelectUI
                    dynamicClass="trip-modal__input-duration"
                    dynamicPlaceholder="Durée"
                    choices={durations}
                    changeChoice={changeDuration}
                    maxHeight={400}
                />
                <span>En quelle année?</span>
                <SelectUI
                    dynamicClass="trip-modal__input-year"
                    dynamicPlaceholder="Année"
                    choices={yearsArray}
                    changeChoice={changeNumber}
                    maxHeight={400}
                />
                <span>Avec qui?</span>
                <SelectUI
                    dynamicClass="trip-modal__input-accompanied"
                    dynamicPlaceholder="Accompagné(e)"
                    choices={withFriendsChoices}
                    changeChoice={changeChoice}
                    maxHeight={400}
                />
            </div>
            <div className="trip-modal__description-area">
                <span>Donne nous des détails!</span>
                <TextareaUI
                    dynamicClass=""
                    dynamicName="trip-description"
                    dynamicLabel="Lieux, expériences, ..."
                    value={details}
                    changeHandler={changeDetails}
                />
            </div>
        </div>
    );
};

export default AddTripModalContent;

import { useSelector } from "react-redux";
import { useCountry, useYears } from "../../../../../utils/hooks/hooks";
import MuiSelect from "../../../../mui/MuiSelect";
import MuiTextarea from "../../../../mui/MuiTextarea";

export const durations = [
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

export const withFriendsChoices = [
    "Seul(e)",
    "En couple",
    "Aves des ami(e)s",
    "En famille",
];

const ParentModalContent = ({
    prevTripsData,
    changeCountry,
    changeDuration,
    changeNumber,
    changeChoice,
    handleDetails,
}) => {
    const { countriesArray } = useCountry();
    const { yearsArray } = useYears();
    const albumData = useSelector(
        (state) => state.albumObjectArrayStore.albumObjectArray
    );
    return (
        <div className="trip-modal__content">
            <div className="trip-modal__inputs-area">
                <span>Quelle était la destination?</span>
                <MuiSelect
                    dynamicClass="trip-modal__input-destination"
                    dynamicPlaceholder="Destination"
                    choices={countriesArray}
                    changeChoice={changeCountry}
                    maxHeight={400}
                />
                <span>Pendant combien de temps?</span>
                <MuiSelect
                    dynamicClass="trip-modal__input-duration"
                    dynamicPlaceholder="Durée"
                    choices={durations}
                    changeChoice={changeDuration}
                    maxHeight={400}
                />
                <span>En quelle année?</span>
                <MuiSelect
                    dynamicClass="trip-modal__input-year"
                    dynamicPlaceholder="Année"
                    choices={yearsArray}
                    changeChoice={changeNumber}
                    maxHeight={400}
                />
                <span>Avec qui?</span>
                <MuiSelect
                    dynamicClass="trip-modal__input-accompanied"
                    dynamicPlaceholder="Accompagné(e)"
                    choices={withFriendsChoices}
                    changeChoice={changeChoice}
                    maxHeight={400}
                />
            </div>
            <div className="trip-modal__description-area">
                <span>Donne nous des détails!</span>
                <MuiTextarea
                    dynamicClass=""
                    dynamicName="trip-details"
                    dynamicLabel="Lieux, expériences, ..."
                    value={prevTripsData.details}
                    changeHandler={handleDetails}
                    blurHandler={null}
                />
                <div className="trip-modal__album-container">
                    {albumData.length > 0 &&
                        Array.isArray(albumData) &&
                        albumData.map((album, index) => (
                            <div
                                key={"divsion-" + index}
                                className="trip-modal-album"
                            >
                                <h4 key={"title-" + index}>{album.name}</h4>
                                <div
                                    key={"child-divsion-" + index}
                                    className="trip-modal-album__pictures-container"
                                >
                                    {album.urls.map((url, index) => (
                                        <img
                                            key={"url" + index}
                                            src={url}
                                            alt={
                                                index +
                                                1 +
                                                "e photo provenant de l'" +
                                                album.name
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ParentModalContent;

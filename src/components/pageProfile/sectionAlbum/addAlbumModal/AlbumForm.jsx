import { useCountry, useYears } from "../../../../utils/hooks/hooks";
import SelectUI from "../../../ui/SelectUI";
import PicturesDisplayer from "./PicturesDisplayer";

const AlbumForm = ({
    changeCountry,
    changeNumber,
    handleAlbumPicture,
    albumPictureUrl,
    destination,
    year,
}) => {
    const { yearsArray } = useYears();
    const { countriesArray } = useCountry();
    return (
        <form action="" encType="multipart/form-data">
            <div className="add-album-modal__same-row">
                <div className="add-album-modal__country-field">
                    <p>Dans quel pays êtiez-vous parti?</p>
                    <SelectUI
                        dynamicClass="add-album-modal__input-country"
                        dynamicPlaceholder="Pays"
                        choices={countriesArray}
                        changeChoice={changeCountry}
                        maxHeight={400}
                    />
                </div>
                <div className="add-album-modal__input-year">
                    <p>En quelle année?</p>
                    <SelectUI
                        dynamicClass="add-album-modal__input-year"
                        dynamicPlaceholder="Année"
                        choices={yearsArray}
                        changeChoice={changeNumber}
                        maxHeight={400}
                    />
                </div>
            </div>
            <input
                type="file"
                name="file"
                id="trip-file"
                accept=".jpg, .jpeg, .png"
                onChange={handleAlbumPicture}
            />
            <PicturesDisplayer
                albumPictureUrl={albumPictureUrl}
                destination={destination}
                year={year}
            />
        </form>
    );
};

export default AlbumForm;

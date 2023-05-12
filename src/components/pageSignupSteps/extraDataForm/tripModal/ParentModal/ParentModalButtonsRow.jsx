import { useSelector } from "react-redux";
import ButtonUI from "../../../../ui/ButtonUI";
import ChildModal from "../childModal/ChildModal";

const ParentModalButtonsRow = ({
    handleClose,
    prevTripsData,
    changeAlbumsArray,
}) => {
    const albumData = useSelector(
        (state) => state.albumObjectArrayStore.albumObjectArray
    );
    return (
        <div className="trip-modal__buttons-row">
            {albumData[0] !== undefined ? (
                <ButtonUI
                    buttonContent="Confirmer"
                    buttonHandler={handleClose}
                    dynamicClass=""
                />
            ) : (
                <ChildModal
                    key="extra-child-modal"
                    prevTripsData={prevTripsData}
                    changeAlbumsArray={changeAlbumsArray}
                />
            )}
        </div>
    );
};

export default ParentModalButtonsRow;

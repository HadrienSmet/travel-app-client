import { useSelector } from "react-redux";
import MuiButton from "../../../../mui/MuiButton";
import ChildModal from "../childModal/ChildModal";
import MuiModal from "../../../../mui/MuiModal";
import { useState } from "react";

const ParentModalButtonsRow = ({
    handleClose,
    prevTripsData,
    changeAlbumsArray,
}) => {
    const [isChildOpen, setChildOpen] = useState(false);
    const albumData = useSelector(
        (state) => state.albumObjectArrayStore.albumObjectArray
    );
    return (
        <div className="trip-modal__buttons-row">
            {albumData[0] !== undefined ? (
                <MuiButton
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
                // <>
                //     <MuiButton
                //         buttonContent="open"
                //         buttonHandler={() => setChildOpen(true)}
                //         dynamicClass="plain"
                //     />
                //     <MuiModal
                //         isOpen={isChildOpen}
                //         closeModal={() => setChildOpen(false)}
                //     />
                // </>
            )}
        </div>
    );
};

export default ParentModalButtonsRow;

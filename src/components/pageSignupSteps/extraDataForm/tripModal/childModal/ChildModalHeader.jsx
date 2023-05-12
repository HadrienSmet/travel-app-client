import { BsXLg } from "react-icons/bs";

const ChildModalHeader = ({
    prevTripsData,
    handleClose,
    handleAlbumPicture,
}) => {
    return (
        <>
            <div className="child-modal__header">
                <h4 id="child-modal-title">
                    Album {prevTripsData.destination} {prevTripsData.year}
                </h4>
                <BsXLg onClick={handleClose} />
            </div>
            <div className="child-modal__same-row">
                <p id="child-modal-description">
                    Partagez-nous des souvenirs de votre voyage!
                </p>
            </div>
            <input
                type="file"
                name="file"
                id="trip-file"
                accept=".jpg, .jpeg, .png"
                onChange={handleAlbumPicture}
            />
        </>
    );
};

export default ChildModalHeader;

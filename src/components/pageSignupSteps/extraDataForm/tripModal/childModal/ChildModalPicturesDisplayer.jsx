import { FaCamera, FaPlus } from "react-icons/fa";

const usePicturesDisplayer = () => {
    const fillPicturesDispArr = () => {
        let array = [];
        for (let i = 0; i < 12; i++) {
            array.push(i);
        }
        return array;
    };
    const pictureAreas = fillPicturesDispArr();
    return { pictureAreas };
};

const ChildModalPicturesDisplayer = ({ albumPictureUrl, prevTripsData }) => {
    const { pictureAreas } = usePicturesDisplayer();
    return (
        <div className="child-modal__pictures-displayer" id="album-container">
            {pictureAreas.map((area, index) => (
                <label
                    key={"picture-area-label-" + index}
                    htmlFor="trip-file"
                    className="child-modal__picture-area-label"
                >
                    <div className="child-modal__picture-area">
                        <FaCamera className="child-modal__camera-icon" />
                        <FaPlus className="child-modal__plus-icon" />
                    </div>
                </label>
            ))}
            <div className="child-modal__pictures-displayer--absolute">
                {albumPictureUrl !== undefined &&
                    albumPictureUrl.map((url) => (
                        <img
                            key={url}
                            src={url}
                            alt={
                                "Photo pour l'ablum " +
                                prevTripsData.destination +
                                " " +
                                prevTripsData.year
                            }
                        />
                    ))}
            </div>
        </div>
    );
};

export default ChildModalPicturesDisplayer;

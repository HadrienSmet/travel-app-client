import PictureContainer from "./PictureContainer";
import PictureInput from "./PictureInput";

const PictureDivision = ({ profilePictureUrl, handleProfilePicture }) => {
    return (
        <div className="personal-data-form__picture-area">
            <PictureContainer profilePictureUrl={profilePictureUrl} />
            <PictureInput
                profilePictureUrl={profilePictureUrl}
                handleProfilePicture={handleProfilePicture}
            />
        </div>
    );
};

export default PictureDivision;

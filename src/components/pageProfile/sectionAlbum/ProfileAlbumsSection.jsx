import { useWindowSize } from "../../../utils/hooks/hooks";

import ProfileAddAlbumModal from "./addAlbumModal/ProfileAddAlbumModal";
import AlbumsContainer from "./AlbumsContainer";

const ProfileAlbumsSection = ({ isAuthor, dataFrom }) => {
    const screenWidth = useWindowSize().width;

    return (
        <div className="profile-albums-section">
            {isAuthor === true ? <h1>Mes albums :</h1> : <h1>Ses albums :</h1>}
            <AlbumsContainer dataFrom={dataFrom} screenWidth={screenWidth} />
            {isAuthor === true && <ProfileAddAlbumModal />}
        </div>
    );
};

export default ProfileAlbumsSection;

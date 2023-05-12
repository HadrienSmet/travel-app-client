import { useSelector } from "react-redux";
import profileDefaultBg from "../../assets/images/profile-default-bg.webp";

const HeaderBackground = ({ defaultBg }) => {
    const friendProfile = useSelector(
        (state) => state.friendDataStore.friendData
    );
    return (
        <div className="profile-section__header-background">
            {defaultBg === true ? (
                <img
                    src={profileDefaultBg}
                    alt={
                        "Photo de couverture par défaut de " +
                        friendProfile.pseudo
                    }
                />
            ) : (
                <img
                    src={friendProfile.coverPicture}
                    alt={"Photo de couverture de " + friendProfile.pseudo}
                />
            )}
        </div>
    );
};

export default HeaderBackground;

// import { Button } from "@mui/material";
import ButtonUI from "../../ui/ButtonUI";
import { FaUserCog, FaUserEdit } from "react-icons/fa";

const UserBanner = ({ userProfile }) => {
    return (
        <div className="profile-section__header__user-intro">
            <div className="profile-section__header__user-data">
                <div className="profile-section__header__profilePicture-container">
                    <img
                        src={userProfile.profilePicture}
                        alt={"Photo de profil de " + userProfile.pseudo}
                    />
                </div>
                <span>{userProfile.pseudo}</span>
            </div>
            <div className="profile-section__header__buttons-container">
                <ButtonUI
                    buttonContent={
                        <>
                            <span>Edit profil </span>
                            <FaUserEdit />
                        </>
                    }
                    buttonHandler={null}
                    dynamicClass="plain"
                />
                <ButtonUI
                    buttonContent={
                        <>
                            <span>paramètres </span>
                            <FaUserCog />
                        </>
                    }
                    buttonHandler={null}
                    dynamicClass="plain"
                />
            </div>
        </div>
    );
};

export default UserBanner;

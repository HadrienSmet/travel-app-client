import React from "react";
import { FaUser } from "react-icons/fa";

const PictureContainer = ({ profilePictureUrl }) => {
    return (
        <div className="personal-data-form__picture-container">
            {profilePictureUrl !== "" ? (
                <div className="personal-data-form__profile-picture-container">
                    <img
                        className="personal-data-form__profile-picture"
                        src={profilePictureUrl}
                        alt={"Profil de l'utilisateur"}
                    />
                </div>
            ) : (
                <div className="personal-data-form__icon-background">
                    <FaUser />
                </div>
            )}
        </div>
    );
};

export default PictureContainer;

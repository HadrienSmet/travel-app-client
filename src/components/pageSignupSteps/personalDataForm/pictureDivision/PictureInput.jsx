import React from "react";
import MuiButton from "../../../mui/MuiButton";

const PictureInput = ({ profilePictureUrl, handleProfilePicture }) => {
    return (
        <>
            <MuiButton
                buttonContent={
                    profilePictureUrl === "" ? (
                        <label htmlFor="signup-file">Choisir une photo</label>
                    ) : (
                        <label htmlFor="signup-file">Changer de photo</label>
                    )
                }
                buttonHandler={undefined}
                dynamicClass={"signup"}
            />
            <input
                type="file"
                name="file"
                id="signup-file"
                accept=".jpg, .jpeg, .png"
                onChange={handleProfilePicture}
            />
        </>
    );
};

export default PictureInput;

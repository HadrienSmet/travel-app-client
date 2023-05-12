import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { setCoverPictureInUserLoggedData } from "../../../features/userLoggedData.slice";

import { getJwtToken } from "../../../utils/functions/tools/getJwtToken";
import { axiosPutCoverPicture } from "../../../utils/functions/user/axiosPutCoverPicture";

import ProfileHeaderBackground from "./ProfileHeaderBackground";
import BgButtonsArea from "./BgButtonsArea";
import UserBanner from "./UserBanner";

const useProfileHeader = ({ userProfile }) => {
    const [profileHeaderState, setProfileHeaderState] = useState({
        coverPicture: "",
        coverPictureUrl: "",
        isEditing: false,
        isLoading: false,
        defaultPicture: true,
    });

    let { token, userId } = getJwtToken();
    const dispatch = useDispatch();

    const handleCoverPicture = (file) =>
        setProfileHeaderState((curr) => ({ ...curr, coverPicture: file }));
    const handleCoverPictureUrl = (url) =>
        setProfileHeaderState((curr) => ({ ...curr, coverPictureUrl: url }));
    const handleIsEditing = (boolean) =>
        setProfileHeaderState((curr) => ({ ...curr, isEditing: boolean }));
    const handleDefaultPicture = (boolean) =>
        setProfileHeaderState((curr) => ({ ...curr, defaultPicture: boolean }));
    const handleIsLoading = (boolean) =>
        setProfileHeaderState((curr) => ({ ...curr, isLoading: boolean }));
    //This function handles the picture provided by the user
    //@Params { type: Object } => the param of the onChange event listening the input files
    //The first local state contains the file that will be send to the data base
    //The second one contains a blob url that will displays the picture directly in the DOM
    //And the final one is here to indicate to the app wich image it has to display
    const startEditCoverPicture = (e) => {
        handleCoverPicture(e.target.files[0]);
        handleCoverPictureUrl(URL.createObjectURL(e.target.files[0]));
        handleIsEditing(true);
    };

    //This function is here to send the file to the data base
    //An object is made with the constructor FormData() to handle the file
    const handleEditCoverPicture = () => {
        const data = new FormData();
        data.append("file", profileHeaderState.coverPicture);
        handleIsLoading(true);
        axiosPutCoverPicture(userId, data, token)
            .then((res) => {
                dispatch(
                    setCoverPictureInUserLoggedData(res.data.coverPicture)
                );
                handleIsLoading(false);
                handleIsEditing(false);
            })
            .catch((err) => console.log(err));
    };

    const handleCancelCoverPicture = () => {
        handleCoverPicture("");
        handleCoverPictureUrl("");
        handleIsEditing(false);
    };

    useEffect(() => {
        if (userProfile.coverPicture !== undefined) {
            handleDefaultPicture(false);
        }
    }, [userProfile.coverPicture]);

    return {
        profileHeaderState,
        startEditCoverPicture,
        handleCancelCoverPicture,
        handleEditCoverPicture,
    };
};

const ProfileHeader = ({ userProfile }) => {
    const {
        profileHeaderState,
        startEditCoverPicture,
        handleCancelCoverPicture,
        handleEditCoverPicture,
    } = useProfileHeader({ userProfile });
    const { coverPictureUrl, isEditing, isLoading, defaultPicture } =
        profileHeaderState;

    return (
        <div className="profile-section__header">
            <div className="profile-section__header-background">
                <ProfileHeaderBackground
                    isEditing={isEditing}
                    coverPictureUrl={coverPictureUrl}
                    defaultPicture={defaultPicture}
                    userProfile={userProfile}
                />
                <BgButtonsArea
                    isLoading={isLoading}
                    startEditCoverPicture={startEditCoverPicture}
                    handleEditCoverPicture={handleEditCoverPicture}
                    handleCancelCoverPicture={handleCancelCoverPicture}
                />
            </div>
            <UserBanner userProfile={userProfile} />
        </div>
    );
};

export default ProfileHeader;

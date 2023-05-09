import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
    pullFollowerInFriendData,
    pushFollowerInFriendData,
} from "../../features/friendData.slice";
import {
    pullFollowingInUserLoggedData,
    pushFollowingInUserLoggedData,
} from "../../features/userLoggedData.slice";

import { axiosFollowUser } from "../../utils/functions/user/axiosFollowUser";
import { axiosUnfollowUser } from "../../utils/functions/user/axiosUnfollowUser";
import { axiosTellUserIsFollowed } from "../../utils/functions/user/axiosTellUserIsFollowed";
import { axiosTellUserIsUnfollowed } from "../../utils/functions/unfollow/axiosTellUserIsUnfollowed";
import { getJwtToken } from "../../utils/functions/tools/getJwtToken";

import { FaRegEnvelope, FaUserCheck, FaUserPlus } from "react-icons/fa";
import ButtonUI from "../ui/ButtonUI";

const useFriendHandler = () => {
    const [isFriend, setIsFriend] = useState(false);
    let { userId, token } = getJwtToken();
    const dispatch = useDispatch();
    const friendProfile = useSelector(
        (state) => state.friendDataStore.friendData
    );
    const userProfile = useSelector(
        (state) => state.userLoggedDataStore.userLoggedData
    );

    const handleIsFriend = (boolean) => setIsFriend(boolean);

    useEffect(() => {
        if (userProfile.following.includes(friendProfile.pseudo))
            handleIsFriend(true);
    }, [userProfile, friendProfile.pseudo]);

    //This function handles the logic about following a user
    //Two calls to the API are required to complete his utility
    //The first call is here to put the pseudo of the friend inside the user's data
    //The second call is here to put the pseudo of the user inside the friend's data
    const handleNewFriend = () => {
        let data = {
            pseudo: friendProfile.pseudo,
        };
        let dataForFriend = {
            pseudo: userProfile.pseudo,
        };
        axiosFollowUser(userId, data, token).then(() => {
            dispatch(pushFollowingInUserLoggedData(friendProfile.pseudo));
            axiosTellUserIsFollowed(
                friendProfile._id,
                dataForFriend,
                token
            ).then(() => {
                dispatch(pushFollowerInFriendData(userProfile.pseudo));
            });
        });
    };

    //This function handles the logic about unfollowing a user
    //Two calls to the API are required to complete his utility
    //The first call is here to pull the pseudo of the friend from the user's data
    //The second call is here to pull the pseudo of the user from the friend's data
    const handleRemoveFriend = () => {
        let data = {
            pseudo: friendProfile.pseudo,
        };
        let dataForFriend = {
            pseudo: userProfile.pseudo,
        };
        axiosUnfollowUser(userId, data, token).then(() => {
            dispatch(pullFollowingInUserLoggedData(friendProfile.pseudo));
            handleIsFriend(false);
            axiosTellUserIsUnfollowed(
                friendProfile._id,
                dataForFriend,
                token
            ).then(() => {
                dispatch(pullFollowerInFriendData(userProfile.pseudo));
            });
        });
    };

    return {
        friendProfile,
        isFriend,
        handleNewFriend,
        handleRemoveFriend,
    };
};

const UserIntro = () => {
    const { friendProfile, isFriend, handleNewFriend, handleRemoveFriend } =
        useFriendHandler();
    return (
        <div className="profile-section__header__user-intro">
            <div className="profile-section__header__user-data">
                <div className="profile-section__header__profilePicture-container">
                    <img
                        src={friendProfile.profilePicture}
                        alt={"Photo de profil de " + friendProfile.pseudo}
                    />
                </div>
                <h2>{friendProfile.pseudo}</h2>
            </div>
            <div className="profile-section__header__buttons-container">
                {isFriend === false ? (
                    <ButtonUI
                        buttonContent={
                            <>
                                <span>S'abonner</span>
                                <FaUserPlus />
                            </>
                        }
                        buttonHandler={handleNewFriend}
                        dynamicClass="plain"
                    />
                ) : (
                    <ButtonUI
                        buttonContent={
                            <>
                                <span>Abonné</span>
                                <FaUserCheck />
                            </>
                        }
                        buttonHandler={handleRemoveFriend}
                        dynamicClass=""
                    />
                )}
                <ButtonUI
                    buttonContent={
                        <>
                            <span>Messages</span>
                            <FaRegEnvelope />
                        </>
                    }
                    buttonHandler={undefined}
                    dynamicClass="plain"
                />
            </div>
        </div>
    );
};

export default UserIntro;

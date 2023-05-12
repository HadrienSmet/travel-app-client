import axios from "axios";

export const axiosTellUserIsFollowed = async (
    friendId,
    dataForFriend,
    token
) => {
    const url = import.meta.env.VITE_REACT_APP_API_URL;
    return await axios({
        url: `${url}api/auth/newFollower/${friendId}`,
        method: "put",
        data: dataForFriend,
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
        },
    });
};

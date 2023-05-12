import axios from "axios";

export const axiosFollowUser = async (userId, data, token) => {
    const url = import.meta.env.VITE_REACT_APP_API_URL;
    return await axios({
        url: `${url}api/auth/followUser/${userId}`,
        method: "put",
        data: data,
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
        },
    });
};

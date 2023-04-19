import axios from "axios";
import { process } from "../../variables";

export const axiosGetUserPosts = async (userId, token) => {
    return await axios({
        url: `${process.env.REACT_APP_API_URL}api/posts/by/${userId}`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
        },
    });
};

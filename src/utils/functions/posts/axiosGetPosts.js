import axios from "axios";
import { process } from "../../variables";

export const axiosGetPosts = async (token) => {
    return await axios({
        url: `${process.env.REACT_APP_API_URL}api/posts`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
        },
    });
};

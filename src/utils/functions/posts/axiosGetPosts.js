import axios from "axios";

export const axiosGetPosts = async (token) => {
    const url = import.meta.env.VITE_REACT_APP_API_URL;
    return await axios({
        url: `${url}api/posts`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
        },
    });
};

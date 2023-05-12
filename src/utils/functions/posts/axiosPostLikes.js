import axios from "axios";

export const axiosPostLikes = async (id, num, token) => {
    const url = import.meta.env.VITE_REACT_APP_API_URL;
    return await axios({
        url: `${url}api/posts/${id}/like`,
        method: "post",
        data: {
            like: num,
        },
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
        },
    });
};

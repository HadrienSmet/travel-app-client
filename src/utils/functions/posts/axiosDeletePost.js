import axios from "axios";
// import { process } from "../../variables";

export const axiosDeletePost = async (postId, token) => {
    return await axios({
        url: `${process.env.REACT_APP_API_URL}api/posts/${postId}`,
        method: "delete",
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
        },
    });
};

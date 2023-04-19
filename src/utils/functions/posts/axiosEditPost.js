import axios from "axios";
import { process } from "../../variables";

export const axiosEditPost = async (postId, data, token) => {
    return await axios({
        url: `${process.env.REACT_APP_API_URL}api/posts/${postId}`,
        method: "put",
        data: data,
        headers: {
            "Content-Type": "multipart/form-data",
            authorization: `bearer ${token}`,
        },
    });
};

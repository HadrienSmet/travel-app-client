import axios from "axios";
// import { process } from "../../variables";

export const axiosPostLikes = async (id, num, token) => {
    return await axios({
        url: `${process.env.REACT_APP_API_URL}api/posts/${id}/like`,
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

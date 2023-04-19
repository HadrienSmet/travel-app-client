import axios from "axios";
import { process } from "../../variables";

export const axiosPutCoverPicture = async (userId, data, token) => {
    return await axios({
        url: `${process.env.REACT_APP_API_URL}api/auth/setCoverPicture/${userId}`,
        method: "put",
        data: data,
        headers: {
            "Content-Type": "multipart/form-data",
            authorization: `bearer ${token}`,
        },
    });
};

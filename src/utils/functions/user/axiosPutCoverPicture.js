import axios from "axios";

export const axiosPutCoverPicture = async (userId, data, token) => {
    const url = import.meta.env.VITE_REACT_APP_API_URL;
    return await axios({
        url: `${url}api/auth/setCoverPicture/${userId}`,
        method: "put",
        data: data,
        headers: {
            "Content-Type": "multipart/form-data",
            authorization: `bearer ${token}`,
        },
    });
};

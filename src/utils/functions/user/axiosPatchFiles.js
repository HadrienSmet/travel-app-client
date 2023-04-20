import axios from "axios";
// import { process } from "../../variables";

export const axiosPatchFiles = async (res, fileData) => {
    return await axios.patch(
        `${process.env.REACT_APP_API_URL}api/auth/userProfile/${res.data.userId}`,
        fileData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: `bearer ${res.data.token}`,
            },
        }
    );
};

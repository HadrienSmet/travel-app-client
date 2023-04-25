import axios from "axios";

export const axiosPatchFiles = async (res, fileData) => {
    const url =
        import.meta.env.MODE === "development"
            ? import.meta.env.VITE_REACT_DEV_API_URL
            : import.meta.env.VITE_REACT_APP_API_URL;
    return await axios.patch(
        `${url}api/auth/userProfile/${res.data.userId}`,
        fileData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: `bearer ${res.data.token}`,
            },
        }
    );
};

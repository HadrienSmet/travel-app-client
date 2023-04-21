import axios from "axios";

export const axiosCreateAlbum = async (userId, data, token) => {
    const url =
        import.meta.env.MODE === "development"
            ? import.meta.env.VITE_REACT_DEV_API_URL
            : import.meta.env.VITE_REACT_APP_API_URL;
    return await axios({
        url: `${url}api/auth/setAlbum/${userId}`,
        method: "put",
        data: data,
        headers: {
            "Content-Type": "multipart/form",
            authorization: `bearer ${token}`,
        },
    });
};

import axios from "axios";

export const axiosGetUser = async (pseudo, token) => {
    const url =
        import.meta.env.MODE === "development"
            ? import.meta.env.VITE_REACT_DEV_API_URL
            : import.meta.env.VITE_REACT_APP_API_URL;
    return await axios({
        url: `${url}api/auth/userProfile/${pseudo}`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
        },
    });
};

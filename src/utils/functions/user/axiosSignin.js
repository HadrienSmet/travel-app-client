import axios from "axios";

export const axiosSignIn = async (data) => {
    const url =
        import.meta.env.MODE === "development"
            ? import.meta.env.VITE_REACT_DEV_API_URL
            : import.meta.env.VITE_REACT_APP_API_URL;
    return await axios.post(`${url}api/auth/login`, data, {
        "Content-Type": "application/json",
    });
};

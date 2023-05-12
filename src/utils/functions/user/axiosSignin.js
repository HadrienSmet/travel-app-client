import axios from "axios";

export const axiosSignIn = async (data) => {
    const url = import.meta.env.VITE_REACT_APP_API_URL;
    return await axios.post(`${url}api/auth/login`, data, {
        "Content-Type": "application/json",
    });
};

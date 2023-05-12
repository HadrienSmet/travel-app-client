import axios from "axios";

export const axiosPostSignupExtra = async (data) => {
    const url = import.meta.env.VITE_REACT_APP_API_URL;
    return await axios.post(`${url}api/auth/signup`, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

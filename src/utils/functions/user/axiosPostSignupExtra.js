import axios from "axios";

export const axiosPostSignupExtra = async (data) => {
    const url =
        import.meta.env.MODE === "development"
            ? import.meta.env.VITE_REACT_DEV_API_URL
            : import.meta.env.VITE_REACT_APP_API_URL;
    return await axios.post(`${url}api/auth/signup`, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};

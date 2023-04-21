import axios from "axios";

export const axiosCheckMail = async (email) => {
    const url =
        import.meta.env.MODE === "development"
            ? import.meta.env.VITE_REACT_DEV_API_URL
            : import.meta.env.VITE_REACT_APP_API_URL;
    return await axios.get(`${url}api/auth/checkMail/${email}`, {
        "Content-Type": "application/json",
    });
};

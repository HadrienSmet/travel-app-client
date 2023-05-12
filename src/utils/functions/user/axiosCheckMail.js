import axios from "axios";

export const axiosCheckMail = async (email) => {
    const url = import.meta.env.VITE_REACT_APP_API_URL;
    return await axios.get(`${url}api/auth/checkMail/${email}`, {
        "Content-Type": "application/json",
    });
};

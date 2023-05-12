import axios from "axios";

export const axiosCheckPseudo = async (pseudo) => {
    const url = import.meta.env.VITE_REACT_APP_API_URL;
    return await axios.get(`${url}api/auth/checkPseudo/${pseudo}`, {
        "Content-Type": "application/json",
    });
};

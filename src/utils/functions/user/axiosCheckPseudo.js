import axios from "axios";
import { process } from "../../variables";

export const axiosCheckPseudo = async (pseudo) => {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}api/auth/checkPseudo/${pseudo}`,
        {
            "Content-Type": "application/json",
        }
    );
};

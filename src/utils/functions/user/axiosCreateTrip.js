import axios from "axios";

export const axiosCreateTrip = async (userId, trip, token) => {
    const url =
        import.meta.env.MODE === "development"
            ? import.meta.env.VITE_REACT_DEV_API_URL
            : import.meta.env.VITE_REACT_APP_API_URL;
    return await axios({
        url: `${url}api/auth/setTrip/${userId}`,
        method: "put",
        data: trip,
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
        },
    });
};

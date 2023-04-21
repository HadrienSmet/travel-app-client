import axios from "axios";

export const axiosGetPostsFromCountry = async (selectedCountry, token) => {
    const url =
        import.meta.env.MODE === "development"
            ? import.meta.env.VITE_REACT_DEV_API_URL
            : import.meta.env.VITE_REACT_APP_API_URL;
    return await axios({
        url: `${url}api/posts/from/${selectedCountry}`,
        method: "get",
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
        },
    });
};

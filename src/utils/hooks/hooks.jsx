import { useState, useEffect } from "react";

export const useWindowSize = () => {
    const isClient = typeof window === "object";

    const getSize = () => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined,
        };
    };

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        const handleResize = () => {
            setWindowSize(getSize());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);

    return windowSize;
};

export const useScrollTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
};

export const useCountry = () => {
    const options = useMemo(() => countryList().getData(), []);
    const fillCountryArray = () => {
        let countries = [];
        for (let i = 0; i < options.length; i++) {
            countries.push(options[i].label);
        }
        return countries;
    };
    const countriesArray = fillCountryArray();

    return { countriesArray };
};

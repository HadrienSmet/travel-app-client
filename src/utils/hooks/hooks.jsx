import { useState, useEffect, useMemo } from "react";
import countryList from "react-select-country-list";

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

export const useYears = () => {
    const fillYearsArray = () => {
        const today = new Date();
        const thisYear = today.getFullYear();
        const options = [];
        for (let i = 1950; i < thisYear + 1; i++) {
            options.push(i);
        }
        return options;
    };
    const yearsArray = fillYearsArray();

    return { yearsArray };
};

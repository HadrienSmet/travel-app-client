import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import NavigationGuest from "./navigationGuest/NavigationGuest";
import Logo from "./Logo";
import NavigationUser from "./navigationUser/NavigationUser";
import { useWindowSize } from "../../utils/hooks/hooks";

const useHeader = () => {
    const [scrollY, setScrollY] = useState(0);
    const headerRef = useRef(null);
    const screenWidth = useWindowSize().width;

    useEffect(() => {
        console.log(screenWidth);
        const handleScroll = () => {
            if (window.scrollY < scrollY) {
                headerRef.current.style.top = 0;
            } else {
                headerRef.current.style.top = "-104px";
            }
            setScrollY(window.scrollY);
        };
        if (screenWidth >= 1025) {
            window.addEventListener("scroll", handleScroll);
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY, screenWidth]);

    return {
        headerRef,
    };
};

const Header = () => {
    const { headerRef } = useHeader();
    const isUserLogged = useSelector(
        (state) => state.currentLoggedState.loggedState
    );

    return (
        <header className="header" ref={headerRef}>
            <div className="header__logo-container">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            {isUserLogged === true ? <NavigationUser /> : <NavigationGuest />}
        </header>
    );
};

export default Header;

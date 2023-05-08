import { useWindowSize } from "../../../utils/hooks/hooks";

import NavigationGuestMobile from "./NavigationGuestMobile";
import NavigationGuestDesktop from "./NavigationGuestDesktop";

const NavigationGuest = () => {
    const screenWidth = useWindowSize().width;

    return (
        <nav className="guest-navigation">
            {screenWidth > 1025 ? (
                <NavigationGuestDesktop />
            ) : (
                <NavigationGuestMobile />
            )}
        </nav>
    );
};

export default NavigationGuest;

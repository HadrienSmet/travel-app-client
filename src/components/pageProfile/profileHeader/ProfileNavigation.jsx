import { useEffect, useRef } from "react";
import { useWindowSize } from "../../../utils/hooks/hooks";
import ButtonUI from "../../ui/ButtonUI";

const useProfileNavigation = ({ profileState }) => {
    const screenWidth = useWindowSize().width;
    const ref = useRef();

    //This useEffect handles the position of the navigation bar of the profile section
    //His position is defined by the state of the component
    useEffect(() => {
        switch (profileState) {
            case "actuality":
                ref.current.style.transform = "translateX(0)";
                break;
            case "albums":
                ref.current.style.transform = "translateX(100%)";
                break;
            case "trips":
                ref.current.style.transform = "translateX(200%)";
                break;
            case "friends":
                ref.current.style.transform = "translateX(300%)";
                break;
            case "infos":
                ref.current.style.transform = "translateX(400%)";
                break;
            default:
                console.log("Bravo t'as réussi à faire bugger mon app");
        }
    }, [profileState, screenWidth]);

    return {
        ref,
    };
};

const ProfileNavigation = ({ profileState, handleProfileState }) => {
    const { ref } = useProfileNavigation({ profileState });
    return (
        <nav className="profile-section__navigation">
            <div className="profile-section__navigation__buttons-container">
                <ButtonUI
                    buttonContent="Actu"
                    buttonHandler={handleProfileState}
                    dynamicClass="sober"
                    dynamicId="actuality"
                />
                <ButtonUI
                    buttonContent="Albums"
                    buttonHandler={handleProfileState}
                    dynamicClass="sober"
                    dynamicId="albums"
                />
                <ButtonUI
                    buttonContent="Trips"
                    buttonHandler={handleProfileState}
                    dynamicClass="sober"
                    dynamicId="trips"
                />
                <ButtonUI
                    buttonContent="Amis"
                    buttonHandler={handleProfileState}
                    dynamicClass="sober"
                    dynamicId="friends"
                />
                <ButtonUI
                    buttonContent="Infos"
                    buttonHandler={handleProfileState}
                    dynamicClass="sober"
                    dynamicId="infos"
                />
            </div>
            <span ref={ref} className="profile-section__navigation-bar"></span>
        </nav>
    );
};

export default ProfileNavigation;

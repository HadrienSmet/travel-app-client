import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setWelcomeState } from "../../../features/welcomeState.slice";
import ButtonUI from "../../ui/ButtonUI";
import PopoverUI from "../../ui/PopoverUI";

const useNavigationGuestMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    //This function is called when the user clicks on the menu button on the mobile version
    //@Params { type: Object } => the param from the onClick event
    //It just open the menu
    const handleClick = () => {
        setIsOpen(true);
        ref.current.classList.add("active");
    };

    //This function is called when the user clicks on the X button on the mobile version
    //@Params { type: Object } => the param from the onClick event
    //It just close the menu
    const handleClose = () => {
        setIsOpen(false);
        ref.current.classList.remove("active");
    };

    return {
        isOpen,
        ref,
        handleClick,
        handleClose,
    };
};

const NavigationGuestMobile = () => {
    const dispatch = useDispatch();
    const { isOpen, ref, handleClick, handleClose } =
        useNavigationGuestMobile();
    const dispatchState = (state) => dispatch(setWelcomeState(state));

    return (
        <div className="guest-mobile-nav">
            <ButtonUI
                buttonContent={
                    <div ref={ref} className="toggle-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }
                buttonHandler={handleClick}
                dynamicClass="mobile-nav"
            />
            <PopoverUI dynamicClass="mobile-nav-popover" isOpen={isOpen}>
                <ButtonUI
                    dynamicClass=""
                    buttonContent="Inscription"
                    buttonHandler={() => {
                        dispatchState("signup");
                        handleClose();
                    }}
                />
                <ButtonUI
                    dynamicClass=""
                    buttonContent="Connexion"
                    buttonHandler={() => {
                        dispatchState("signin");
                        handleClose();
                    }}
                />
            </PopoverUI>
        </div>
    );
};

export default NavigationGuestMobile;

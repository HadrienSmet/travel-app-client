import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ButtonUI from "../../ui/ButtonUI";
import PopoverUI from "../../ui/PopoverUI";

const useNavigationUserMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    const handleClick = () => {
        setIsOpen(true);
        ref.current.classList.add("active");
    };

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

const NavigationUserMobile = () => {
    const { isOpen, ref, handleClick, handleClose } = useNavigationUserMobile();

    return (
        <div className="user-mobile-nav">
            <ButtonUI
                buttonContent={
                    <div ref={ref} className="toggle-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }
                buttonHandler={handleClick}
                dynamicClass="mobile-nav-toggle"
            />
            <PopoverUI dynamicClass="mobile-nav-popover" isOpen={isOpen}>
                <ButtonUI
                    buttonContent={<Link to="/home">Accueil</Link>}
                    buttonHandler={handleClose}
                    dynamicClass=""
                />
                <ButtonUI
                    buttonContent={<Link to="/profile">Profil</Link>}
                    buttonHandler={handleClose}
                    dynamicClass=""
                />
                <ButtonUI
                    buttonContent={<Link to="/">Déconnexion</Link>}
                    buttonHandler={handleClose}
                    dynamicClass=""
                />
            </PopoverUI>
        </div>
    );
};

export default NavigationUserMobile;

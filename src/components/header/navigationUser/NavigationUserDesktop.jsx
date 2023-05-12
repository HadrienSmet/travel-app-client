import { Link } from "react-router-dom";
import ButtonUI from "../../ui/ButtonUI";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useNavUserDesktop = () => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname);

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location.pathname]);

    return { currentPage };
};

const NavigationUserDesktop = () => {
    const { currentPage } = useNavUserDesktop();
    return (
        <div className="guest-navigation__buttons-container">
            <ButtonUI
                buttonContent={
                    currentPage === "/home" ? (
                        <a href="#go-on-top">Accueil</a>
                    ) : (
                        <Link to="/home">Accueil</Link>
                    )
                }
                buttonHandler={undefined}
                dynamicClass={"nav"}
            />
            <ButtonUI
                buttonContent={<Link to="/profile">Profil</Link>}
                buttonHandler={undefined}
                dynamicClass={"nav"}
            />
            <ButtonUI
                buttonContent={<Link to="/">Déconnexion</Link>}
                buttonHandler={undefined}
                dynamicClass={"nav"}
            />
        </div>
    );
};

export default NavigationUserDesktop;

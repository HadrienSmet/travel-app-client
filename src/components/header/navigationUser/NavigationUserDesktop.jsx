import { Link } from "react-router-dom";
import ButtonUI from "../../ui/ButtonUI";

const NavigationUserDesktop = () => {
    return (
        <div className="guest-navigation__buttons-container">
            <ButtonUI
                buttonContent={
                    window.location.href.split("3001/")[1] === "home" ? (
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

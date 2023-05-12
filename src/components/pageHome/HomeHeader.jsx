import ButtonUI from "../ui/ButtonUI";
import Globe3D from "../Globe3D";
import { useSelector } from "react-redux";

const HomeHeader = ({ changeSelectedCountry, fetchAllposts }) => {
    const userData = useSelector(
        (state) => state.userLoggedDataStore.userLoggedData
    );
    return (
        <div className="home__header">
            <div className="home__header__intro-and-btn-area">
                <div className="home__header__profile-division">
                    <div className="home__header__profile-division__img-container">
                        <img
                            src={userData.profilePicture}
                            alt={"photo de profil de " + userData.pseudo}
                        />
                    </div>
                    <h1>Bonjour {userData.pseudo}</h1>
                </div>
                <ButtonUI
                    buttonContent={
                        <a
                            href="#home_anchor"
                            className="home__header__reset-btn"
                            onClick={fetchAllposts}
                        >
                            Réinitialiser
                        </a>
                    }
                    buttonHandler={undefined}
                    dynamicClass="plain"
                />
            </div>
            <div className="home__header__globe-area">
                <h2>Venez voir ce qu'il se passe ailleurs</h2>
                <Globe3D
                    dynamicClassName="home"
                    changeSelectedCountry={(value) =>
                        changeSelectedCountry(value)
                    }
                    forHome={true}
                />
            </div>
        </div>
    );
};

export default HomeHeader;

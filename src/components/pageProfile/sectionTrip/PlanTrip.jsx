import Globe3D from "../../Globe3D";
import ButtonUI from "../../ui/ButtonUI";

const PlanTrip = ({ isAuthor, changeSelectedCountry, handleFutureTrip }) => {
    return (
        <>
            {isAuthor === true && (
                <div className="profile-trips-section__plan-a-trip">
                    <h2>Plannifier un voyage</h2>
                    <h3>Ou souhaitez vous partir?</h3>
                    <Globe3D
                        dynamicClassName="profile"
                        changeSelectedCountry={changeSelectedCountry}
                        forHome={false}
                    />
                    <ButtonUI
                        buttonContent="Faire une recherche"
                        buttonHandler={handleFutureTrip}
                        dynamicClass="plain"
                    />
                </div>
            )}
        </>
    );
};

export default PlanTrip;

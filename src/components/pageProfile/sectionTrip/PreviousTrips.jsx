import TripsAccordionUI from "../../ui/TripsAccordionUI";
import ProfileAddTripModal from "./addTripModal/ProfileAddTripModal";

const PreviousTrips = ({ isAuthor, dataFrom }) => {
    return (
        <div className="profile-trips-section__previous-trips">
            {isAuthor === true ? (
                <h2>Mes précédents voyages.</h2>
            ) : (
                <h2>Ses précédents voyages.</h2>
            )}
            <div className="profile-trips-section__previous-trips-container">
                <TripsAccordionUI
                    dynamicClass="profile"
                    previousTrips={dataFrom.previousTrips}
                    signingUp={false}
                />
            </div>
            {isAuthor === true && <ProfileAddTripModal />}
        </div>
    );
};

export default PreviousTrips;

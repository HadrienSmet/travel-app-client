import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PreviousTrips from "./PreviousTrips";
import PlanTrip from "./PlanTrip";
import { useButtonUI } from "../../../utils/hooks/hooks";

const useProfileTripsSection = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const navigate = useNavigate();

    const changeSelectedCountry = (country) => setSelectedCountry(country);

    const handleFutureTrip = (e) => {
        useButtonUI(e);
        console.log(selectedCountry);
        navigate(`/error-404`);
    };

    return {
        changeSelectedCountry,
        handleFutureTrip,
    };
};

const ProfileTripsSection = ({ isAuthor, dataFrom }) => {
    const { changeSelectedCountry, handleFutureTrip } =
        useProfileTripsSection();

    return (
        <section className="profile-trips-section">
            <PreviousTrips isAuthor={isAuthor} dataFrom={dataFrom} />
            <PlanTrip
                isAuthor={isAuthor}
                changeSelectedCountry={changeSelectedCountry}
                handleFutureTrip={handleFutureTrip}
            />
        </section>
    );
};

export default ProfileTripsSection;

import { FaChevronDown } from "react-icons/fa";

const TripsAccordionUI = ({ dynamicClass, previousTrips, signingUp }) => {
    const toggleOpen = (e) => {
        e.target.classList.toggle("open");
    };
    return (
        <div className={`${dynamicClass} accordion accordion-ui`}>
            {previousTrips.map((trip, index) => (
                <div
                    key={trip.destination + "-accordion"}
                    className={`accordion__element-container`}
                    onClick={toggleOpen}
                >
                    <div className={`accordion__element-header`}>
                        <h3>{trip.destination + " " + trip.year}</h3>
                        <FaChevronDown />
                    </div>
                    <div className={`accordion__element-content`}>
                        <span>{trip.duration}</span>
                        <span>{trip.withWho}</span>
                        <span>{trip.details}</span>
                    </div>
                    {signingUp && (
                        <div className={`accordion__element-album`}>
                            {trip.album[index].urls.map((url, index) => (
                                <img
                                    key={
                                        "trip-child-div-picture-url" +
                                        trip.destination +
                                        index
                                    }
                                    src={url}
                                    alt={
                                        "Photo faite pendant le voyage en" +
                                        trip.destination
                                    }
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TripsAccordionUI;

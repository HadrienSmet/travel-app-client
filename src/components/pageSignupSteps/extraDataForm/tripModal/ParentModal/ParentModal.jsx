import { useState } from "react";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";

import ParentModalHeader from "./ParentModalHeader";
import ParentModalContent from "./ParentModalContent";
import ParentModalButtonsRow from "./ParentModalButtonsRow";
import MuiButton from "../../../../mui/MuiButton";
import MuiModal from "../../../../mui/MuiModal";

const useParentModal = () => {
    const [isParentOpen, setIsParentOpen] = useState(false);
    const openModal = (e) => {
        e.preventDefault();
        document.body.style.overflow = "hidden";
        setIsParentOpen(true);
    };
    const closeModal = () => {
        document.body.style.overflow = "auto";
        setIsParentOpen(false);
    };
    return {
        isParentOpen,
        openModal,
        closeModal,
    };
};

const useParentModalData = ({ changeTrips, closeModal }) => {
    const [prevTripsData, setPrevTripsData] = useState({
        destination: "",
        duration: "",
        year: "",
        choice: "",
        details: "",
    });
    const albumData = useSelector(
        (state) => state.albumObjectArrayStore.albumObjectArray
    );

    const changeCountry = (country) =>
        setPrevTripsData({ ...prevTripsData, destination: country });
    const changeDuration = (duration) =>
        setPrevTripsData({
            ...prevTripsData,
            duration: duration,
        });
    const changeNumber = (year) =>
        setPrevTripsData({ ...prevTripsData, year: year });
    const changeChoice = (choice) =>
        setPrevTripsData({ ...prevTripsData, choice: choice });
    const handleDetails = (e) =>
        setPrevTripsData({
            ...prevTripsData,
            details: e.target.value,
        });

    //This functions handle the submission of the data provided by the two modals
    //Creates an object called trip that will contain all the data and gives it to his parent thanks to the function herited by him
    const handlePreviousTripSubmission = () => {
        if (prevTripsData.destination.match(/\$<>=\+\*/i)) {
            alert("Les caractères suivants ne sont pas tolérés. $ > < = + *");
        } else {
            if (albumData.length > 0 && Array.isArray(albumData)) {
                let trip = {
                    destination: prevTripsData.destination,
                    year: prevTripsData.year,
                    duration: prevTripsData.duration,
                    withWho: prevTripsData.choice,
                    details: prevTripsData.details,
                    album: { ...albumData },
                };
                changeTrips(trip);
            }
        }
    };
    //This function changes the state of the component in order to close the parent modal
    //Then it calls a function that will handles the submission of the datas
    const handleClose = () => {
        closeModal();
        handlePreviousTripSubmission();
    };

    return {
        prevTripsData,
        changeCountry,
        changeDuration,
        changeNumber,
        changeChoice,
        handleDetails,
        handleClose,
    };
};

const ParentModal = ({ changeAlbumsArray, changeTrips }) => {
    const { isParentOpen, openModal, closeModal } = useParentModal();
    const {
        prevTripsData,
        changeCountry,
        changeDuration,
        changeNumber,
        changeChoice,
        handleDetails,
        handleClose,
    } = useParentModalData({ changeTrips, closeModal });

    return (
        <>
            <MuiButton
                buttonContent={
                    <>
                        <span>Ajouter un voyage</span>
                        <FaPlus />
                    </>
                }
                buttonHandler={openModal}
                dynamicClass="plain"
            />
            <MuiModal
                isOpen={isParentOpen}
                closeModal={closeModal}
                dynamicClass="trip-modal"
                portal="portal"
            >
                <ParentModalHeader closeModal={closeModal} />
                <ParentModalContent
                    prevTripsData={prevTripsData}
                    changeCountry={changeCountry}
                    changeDuration={changeDuration}
                    changeNumber={changeNumber}
                    changeChoice={changeChoice}
                    handleDetails={handleDetails}
                />
                <ParentModalButtonsRow
                    handleClose={handleClose}
                    prevTripsData={prevTripsData}
                    changeAlbumsArray={changeAlbumsArray}
                />
            </MuiModal>
        </>
    );
};

export default ParentModal;

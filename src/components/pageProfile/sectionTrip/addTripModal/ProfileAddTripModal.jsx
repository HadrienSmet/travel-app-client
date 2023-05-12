import { useState } from "react";
import { useDispatch } from "react-redux";
import { pushTripInUserLoggedData } from "../../../../features/userLoggedData.slice";
import { getJwtToken } from "../../../../utils/functions/tools/getJwtToken";
import { axiosCreateTrip } from "../../../../utils/functions/user/axiosCreateTrip";

import { FaPlus } from "react-icons/fa";

import ButtonUI from "../../../ui/ButtonUI";
import ModalUI from "../../../ui/ModalUI";
import AddTripModalHeader from "./AddTripModalHeader";
import AddTripModalContent from "./AddTripModalContent";
import { useButtonUI } from "../../../../utils/hooks/hooks";

const useProfileAddTripModal = () => {
    const dispatch = useDispatch();
    const { userId, token } = getJwtToken();
    const [addTripState, setAddTripState] = useState({
        isOpen: false,
        destination: "",
        duration: "",
        year: "",
        choice: "",
        details: "",
    });

    const changeCountry = (destination) =>
        setAddTripState((curr) => ({ ...curr, destination }));
    const changeDuration = (duration) =>
        setAddTripState((curr) => ({ ...curr, duration }));
    const changeNumber = (year) =>
        setAddTripState((curr) => ({ ...curr, year }));
    const changeChoice = (choice) =>
        setAddTripState((curr) => ({ ...curr, choice }));
    const changeDetails = (e) =>
        setAddTripState((curr) => ({ ...curr, details: e.target.value }));
    const handleOpen = (boolean) =>
        setAddTripState((curr) => ({ ...curr, isOpen: boolean }));
    const justClose = () => handleOpen(false);

    const handleOpenModal = (e) => {
        useButtonUI(e);
        handleOpen(true);
    };
    const handleClose = (e) => {
        useButtonUI(e);
        handleOpen(false);
        handlePreviousTripSubmission();
    };

    //This functions handle the submission of the data provided by the two modals
    //Creates an object called trip that will contain all the data and gives it to his parent thanks to the function herited by him
    const handlePreviousTripSubmission = () => {
        let trip = {
            destination: addTripState.destination,
            year: addTripState.year,
            duration: addTripState.duration,
            withWho: addTripState.choice,
            details: addTripState.details,
        };
        axiosCreateTrip(userId, trip, token)
            .then((res) => {
                handleOpen(false);
                dispatch(pushTripInUserLoggedData(res.data.newTrip));
            })
            .catch((err) => console.log(err));
    };

    return {
        addTripState,
        justClose,
        handleOpenModal,
        handleClose,
        changeCountry,
        changeDuration,
        changeNumber,
        changeChoice,
        changeDetails,
    };
};

const ProfileAddTripModal = () => {
    const {
        addTripState,
        justClose,
        handleOpenModal,
        handleClose,
        changeCountry,
        changeDuration,
        changeNumber,
        changeChoice,
        changeDetails,
    } = useProfileAddTripModal();
    const { isOpen } = addTripState;

    return (
        <div className="profile-add-trip">
            <ButtonUI
                buttonContent={
                    <>
                        <span>Ajouter un voyage</span>
                        <FaPlus />
                    </>
                }
                buttonHandler={handleOpenModal}
                dynamicClass="plain"
            />
            <ModalUI
                isOpen={isOpen}
                closeModal={handleClose}
                dynamicClass="trip-modal"
                portal="portal"
            >
                <AddTripModalHeader handleOpen={justClose} />
                <AddTripModalContent
                    changeCountry={changeCountry}
                    changeDuration={changeDuration}
                    changeNumber={changeNumber}
                    changeChoice={changeChoice}
                    details={addTripState.details}
                    changeDetails={changeDetails}
                />
                <ButtonUI
                    buttonContent="Confirmer"
                    buttonHandler={handleClose}
                    dynamicClass="plain"
                />
            </ModalUI>
        </div>
    );
};

export default ProfileAddTripModal;

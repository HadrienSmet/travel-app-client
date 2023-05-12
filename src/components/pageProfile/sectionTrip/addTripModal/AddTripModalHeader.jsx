import { BsXLg } from "react-icons/bs";

const AddTripModalHeader = ({ handleOpen }) => {
    return (
        <div className="trip-modal__header">
            <h2>Ajouter un voyage</h2>
            <BsXLg onClick={handleOpen} />
        </div>
    );
};

export default AddTripModalHeader;

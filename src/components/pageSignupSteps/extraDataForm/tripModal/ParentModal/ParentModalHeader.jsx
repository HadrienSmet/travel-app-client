import { BsXLg } from "react-icons/bs";

const ParentModalHeader = ({ closeModal }) => {
    return (
        <div className="trip-modal__header">
            <h3>Ajouter un voyage</h3>
            <BsXLg onClick={closeModal} />
        </div>
    );
};

export default ParentModalHeader;

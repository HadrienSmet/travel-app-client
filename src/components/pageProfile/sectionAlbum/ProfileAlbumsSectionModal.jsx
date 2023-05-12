import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import MUIPicturesCarousel from "../../ui/MUIPicturesCarousel";
import ModalUI from "../../ui/ModalUI";
import ButtonUI from "../../ui/ButtonUI";

const useProfileAlbumSectionModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return {
        isOpen,
        handleOpen,
        handleClose,
    };
};

const ProfileAlbumSectionModal = ({ album, index }) => {
    const { isOpen, handleOpen, handleClose } = useProfileAlbumSectionModal();

    return (
        <>
            <ButtonUI
                buttonContent={<FaPlus />}
                buttonHandler={handleOpen}
                dynamicClass="more-picture__div"
            />
            <ModalUI
                isOpen={isOpen}
                closeModal={handleClose}
                dynamicClass="album-modal"
                portal="portal"
            >
                <div className="album-modal__header">
                    <h2>{album.name}</h2>
                    <FaTimes onClick={handleClose} />
                </div>
                <MUIPicturesCarousel pictures={album.pictures} index={index} />
            </ModalUI>
        </>
    );
};
export default ProfileAlbumSectionModal;

import { useState } from "react";

import { useDispatch } from "react-redux";
import { setAlbumObjectArrayStore } from "../../../../../features/albumObjectArray.slice";

import { FaPlus } from "react-icons/fa";
import ChildModalHeader from "./ChildModalHeader";
import ChildModalPicturesDisplayer from "./ChildModalPicturesDisplayer";
import ButtonUI from "../../../../ui/ButtonUI";
import ModalUI from "../../../../ui/ModalUI";

const useChildModal = () => {
    const [isChildOpen, setChildOpen] = useState(false);
    const closeModal = () => setChildOpen(false);
    const openModal = () => setChildOpen(true);
    return {
        isChildOpen,
        closeModal,
        openModal,
    };
};

const useChildModalData = ({
    prevTripsData,
    changeAlbumsArray,
    closeModal,
}) => {
    const [albumPicture, setAlbumPicture] = useState(undefined);
    const [albumPictureUrl, setAlbumPictureUrl] = useState(undefined);
    const dispatch = useDispatch();

    const changeAlbumPicture = (fileArray) => setAlbumPicture(fileArray);
    const changeAlbumPictureUrl = (urlArray) => setAlbumPictureUrl(urlArray);

    //This function fills two differents array when the input files suffer a change
    //@Params {Type: Object} --> the param of the onChange event
    //The first array will contain the urls, when the second contains the files
    //If those arrays are undefined their value is only defined by the new data
    //Else those arrays will contain the new data and conserve the old one
    const handleAlbumPicture = (e) => {
        let albumArrayUrl;
        let albumArray;
        if (albumPictureUrl === undefined) {
            albumArrayUrl = [URL.createObjectURL(e.target.files[0])];
        } else {
            albumArrayUrl = [
                ...albumPictureUrl,
                URL.createObjectURL(e.target.files[0]),
            ];
        }
        if (albumPicture === undefined) {
            albumArray = [e.target.files[0]];
        } else {
            albumArray = [...albumPicture, e.target.files[0]];
        }
        changeAlbumPictureUrl(albumArrayUrl);
        changeAlbumPicture(albumArray);
    };

    //This function handles the submission of the child modal (the creation of an album).
    //It gives the files to his parent components using the function herited by his grand-parent to change his state.
    //And it gives the name of the album and the urls of the blop links by the redux store.
    //And it also changes the state of the component in purpose to close the child modal.
    const handleClose = () => {
        let album = {
            name: `album ${prevTripsData.destination} ${prevTripsData.year}`,
            urls: albumPictureUrl,
        };
        closeModal();
        changeAlbumsArray(albumPicture);
        dispatch(setAlbumObjectArrayStore(album));
    };

    return {
        albumPictureUrl,
        handleClose,
        handleAlbumPicture,
    };
};

const ChildModal = ({ prevTripsData, changeAlbumsArray }) => {
    const { isChildOpen, closeModal, openModal } = useChildModal();
    const { albumPictureUrl, handleClose, handleAlbumPicture } =
        useChildModalData({ prevTripsData, changeAlbumsArray, closeModal });

    return (
        <>
            <ButtonUI
                buttonContent={
                    <>
                        <span>Créer un album</span>
                        <FaPlus />
                    </>
                }
                buttonHandler={openModal}
                dynamicClass="plain"
            />
            <ModalUI
                isOpen={isChildOpen}
                closeModal={closeModal}
                dynamicClass={"child-modal"}
                portal={"scd-portal"}
            >
                <ChildModalHeader
                    prevTripsData={prevTripsData}
                    handleClose={closeModal}
                    handleAlbumPicture={handleAlbumPicture}
                />
                <ChildModalPicturesDisplayer
                    prevTripsData={prevTripsData}
                    albumPictureUrl={albumPictureUrl}
                />
                <ButtonUI
                    buttonContent="Confirmer"
                    buttonHandler={handleClose}
                    dynamicClass="plain"
                />
            </ModalUI>
        </>
    );
};

export default ChildModal;

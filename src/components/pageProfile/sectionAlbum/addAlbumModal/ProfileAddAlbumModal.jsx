import { useState } from "react";

import { useDispatch } from "react-redux";
import { pushAlbumInUserLoggedData } from "../../../../features/userLoggedData.slice";

import { getJwtToken } from "../../../../utils/functions/tools/getJwtToken";
import { axiosCreateAlbum } from "../../../../utils/functions/user/axiosCreateAlbum";

import { FaPlus } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

import AlbumForm from "./AlbumForm";
import MUIClassicLoader from "../../../ui/MUIClassicLoader";
import ButtonUI from "../../../ui/ButtonUI";
import ModalUI from "../../../ui/ModalUI";

const useProfileAlbumModal = () => {
    const [addAlbumState, setAddAlbumState] = useState({
        isLoading: false,
        isOpen: false,
        albumPicture: undefined,
        albumPictureUrl: undefined,
        year: "",
        destination: "",
    });
    const dispatch = useDispatch();
    let { userId, token } = getJwtToken();

    const changeIsLoading = (boolean) =>
        setAddAlbumState((curr) => ({ ...curr, isLoading: boolean }));
    const changeIsOpen = (boolean) =>
        setAddAlbumState((curr) => ({ ...curr, isOpen: boolean }));
    const changeAlbumPicture = (pictureArr) =>
        setAddAlbumState((curr) => ({ ...curr, albumPicture: pictureArr }));
    const changeAlbumPictureUrl = (urlArr) =>
        setAddAlbumState((curr) => ({ ...curr, albumPictureUrl: urlArr }));
    const changeYear = (year) =>
        setAddAlbumState((curr) => ({ ...curr, year }));
    const changeDestination = (destination) =>
        setAddAlbumState((curr) => ({ ...curr, destination }));
    const handleOpen = () => changeIsOpen(true);

    const handleAlbumFormData = () => {
        const data = new FormData();
        data.append(
            "name",
            `album ${addAlbumState.destination} ${addAlbumState.year}`
        );
        addAlbumState.albumPicture.forEach((picture) => {
            data.append("file", picture);
        });

        return data;
    };

    //This function handles the submission of the child modal (the creation of an album).
    //It gives the files to his parent components using the function herited by his grand-parent to change his state.
    //And it gives the name of the album and the urls of the blop links by the redux store.
    //And it also changes the state of the component in purpose to close the child modal.
    const handleClose = () => {
        changeIsLoading(true);
        const data = handleAlbumFormData();
        axiosCreateAlbum(userId, data, token)
            .then((res) => {
                changeIsLoading(false);
                changeIsOpen(false);
                dispatch(pushAlbumInUserLoggedData(res.data.newAlbum));
            })
            .catch((err) => console.log(err));
    };

    //This function fills two differents array when the input files suffer a change
    //@Params {Type: Object} --> the param of the onChange event
    //The first array will contain the urls, when the second contains the files
    //If those arrays are undefined their value is only defined by the new data
    //Else those arrays will contain the new data and conserve the old one
    const handleAlbumPicture = (e) => {
        let albumArrayUrl;
        let albumArray;
        if (addAlbumState.albumPictureUrl === undefined) {
            albumArrayUrl = [URL.createObjectURL(e.target.files[0])];
        } else {
            albumArrayUrl = [
                ...addAlbumState.albumPictureUrl,
                URL.createObjectURL(e.target.files[0]),
            ];
        }
        if (addAlbumState.albumPicture === undefined) {
            albumArray = [e.target.files[0]];
        } else {
            albumArray = [...addAlbumState.albumPicture, e.target.files[0]];
        }
        changeAlbumPictureUrl(albumArrayUrl);
        changeAlbumPicture(albumArray);
    };

    return {
        addAlbumState,
        changeIsOpen,
        changeDestination,
        changeYear,
        handleOpen,
        handleClose,
        handleAlbumPicture,
    };
};

const ProfileAlbumModal = () => {
    const {
        addAlbumState,
        changeIsOpen,
        changeDestination,
        changeYear,
        handleOpen,
        handleClose,
        handleAlbumPicture,
    } = useProfileAlbumModal();
    const { isLoading, isOpen, albumPictureUrl, year, destination } =
        addAlbumState;

    return (
        <>
            <ButtonUI
                buttonContent={
                    <>
                        <span>Créer un nouvel album</span>
                        <FaPlus />
                    </>
                }
                buttonHandler={handleOpen}
                dynamicClass=""
                dynamicId="add-album-modal__toggle-btn"
            />
            <ModalUI
                isOpen={isOpen}
                closeModal={handleClose}
                dynamicClass="add-album-modal"
                portal="portal"
            >
                <div className="add-album-modal__header">
                    <h2 className="add-album-modal-title">
                        Album {destination} {year}
                    </h2>
                    <BsXLg onClick={() => changeIsOpen(false)} />
                </div>
                <h3 id="add-album-modal-description">
                    Partagez-nous des souvenirs de votre voyage!
                </h3>
                <AlbumForm
                    changeCountry={changeDestination}
                    changeNumber={changeYear}
                    handleAlbumPicture={handleAlbumPicture}
                    albumPictureUrl={albumPictureUrl}
                    destination={destination}
                    year={year}
                />
                {isLoading ? (
                    <MUIClassicLoader dynamicId="add-album-loader" />
                ) : (
                    <ButtonUI
                        buttonContent="Confirmer"
                        buttonHandler={handleClose}
                        dynamicClass="plain"
                    />
                )}
            </ModalUI>
        </>
    );
};

export default ProfileAlbumModal;

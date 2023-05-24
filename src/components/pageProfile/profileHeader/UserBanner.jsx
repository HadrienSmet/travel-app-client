import { useDispatch, useSelector } from "react-redux";
import { useButtonUI } from "../../../utils/hooks/hooks";
import ButtonUI from "../../ui/ButtonUI";
import { FaUserCog, FaUserEdit } from "react-icons/fa";
import { setEditingProfile } from "../../../features/editingProfile.slice";

const UserBanner = ({ userProfile }) => {
    const isEditing = useSelector(
        (state) => state.editingProfileState.editingProfile
    );
    const dispatch = useDispatch();
    const handleEditButton = (e) => {
        useButtonUI(e);
        dispatch(setEditingProfile(!isEditing));
    };
    return (
        <div className="profile-section__header__user-intro">
            <div className="profile-section__header__user-data">
                <div className="profile-section__header__profilePicture-container">
                    <img
                        src={userProfile.profilePicture}
                        alt={"Photo de profil de " + userProfile.pseudo}
                    />
                </div>
                <span>{userProfile.pseudo}</span>
            </div>
            <div className="profile-section__header__buttons-container">
                <ButtonUI
                    buttonContent={
                        <>
                            <span>Edit profil </span>
                            <FaUserEdit />
                        </>
                    }
                    buttonHandler={handleEditButton}
                    dynamicClass="plain"
                />
                <ButtonUI
                    buttonContent={
                        <>
                            <span>paramètres </span>
                            <FaUserCog />
                        </>
                    }
                    buttonHandler={useButtonUI}
                    dynamicClass="plain"
                />
            </div>
        </div>
    );
};

export default UserBanner;

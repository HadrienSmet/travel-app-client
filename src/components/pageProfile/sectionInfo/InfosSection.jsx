import { useSelector } from "react-redux";
import InfosSectionForm from "./InfosSectionForm";
import InfosSectionContent from "./InfosSectionContent";

const InfosSection = ({ dataFrom, isAuthor }) => {
    const isEditing = useSelector(
        (state) => state.editingProfileState.editingProfile
    );

    return (
        <div className="profile-infos-section-user">
            {isEditing ? (
                <InfosSectionForm dataFrom={dataFrom} />
            ) : (
                <InfosSectionContent dataFrom={dataFrom} isAuthor={isAuthor} />
            )}
        </div>
    );
};

export default InfosSection;

import { useState } from "react";
import FirstnameDivision from "../../pageSignupSteps/personalDataForm/FirstnameDivision";
import AgeDivision from "../../pageSignupSteps/personalDataForm/AgeDivision";
import EmailDivision from "../../pageWelcome/signup/EmailDivision";
import DescriptionDivision from "../../pageSignupSteps/extraDataForm/DescriptionDivision";
import LastnameDivision from "../../pageSignupSteps/personalDataForm/LastnameDivision";
import GenderDivision from "../../pageSignupSteps/personalDataForm/GenderDivision";
import CountryDivision from "../../pageSignupSteps/personalDataForm/CountryDivision";
import ButtonUI from "../../ui/ButtonUI";
import { useButtonUI } from "../../../utils/hooks/hooks";
import { useDispatch } from "react-redux";
import { setEditingProfile } from "../../../features/editingProfile.slice";

const useInfosSectionForm = ({ dataFrom }) => {
    const dispatch = useDispatch();
    const [infosSectionData, setInfosSectionData] = useState({
        ...dataFrom,
        isEmailOk: false,
        isFirstNameOk: false,
        isLastNameOk: false,
    });
    const changeFirstName = (e) =>
        setInfosSectionData({
            ...infosSectionData,
            firstName: e.target.value,
        });
    const changeLastName = (e) =>
        setInfosSectionData({
            ...infosSectionData,
            lastName: e.target.value,
        });
    const changeIsEmailOk = (boolean) =>
        setInfosSectionData({ ...infosSectionData, isEmailOk: boolean });
    const changeIsFirstNameOk = (boolean) =>
        setInfosSectionData({ ...infosSectionData, isFirstNameOk: boolean });
    const changeIsLastNameOk = (boolean) =>
        setInfosSectionData({ ...infosSectionData, isLastNameOk: boolean });
    const changeAge = (age) =>
        setInfosSectionData({
            ...infosSectionData,
            age,
        });
    const changeGender = (gender) =>
        setInfosSectionData({
            ...infosSectionData,
            gender,
        });
    const changeEmail = (e) =>
        setInfosSectionData({
            ...infosSectionData,
            email: e.target.value,
        });
    const changeCountry = (country) =>
        setInfosSectionData({
            ...infosSectionData,
            country,
        });
    const changeDescription = (e) =>
        setInfosSectionData({
            ...infosSectionData,
            description: e.target.value,
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        useButtonUI(e);
        dispatch(setEditingProfile(false));
    };

    return {
        infosSectionData,
        changeAge,
        changeCountry,
        changeDescription,
        changeEmail,
        changeFirstName,
        changeGender,
        changeIsEmailOk,
        changeIsFirstNameOk,
        changeIsLastNameOk,
        changeLastName,
        handleSubmit,
    };
};

const InfosSectionForm = ({ dataFrom }) => {
    const {
        infosSectionData,
        changeAge,
        changeCountry,
        changeDescription,
        changeEmail,
        changeFirstName,
        changeGender,
        changeIsEmailOk,
        changeIsFirstNameOk,
        changeIsLastNameOk,
        changeLastName,
        handleSubmit,
    } = useInfosSectionForm({ dataFrom });
    const { age, country, email, firstName, gender, lastName } =
        infosSectionData;

    return (
        <form className="infos-section__form" action="">
            <div className="infos-section__form-content">
                <div className="profile-infos-section__left-column">
                    <div className="infos-section__form__firstname-div">
                        <strong>Prénom:</strong>
                        <FirstnameDivision
                            firstName={firstName}
                            changeFirstName={changeFirstName}
                            changeIsFirstNameOk={changeIsFirstNameOk}
                        />
                    </div>
                    <div className="infos-section__form__lastname-div">
                        <strong>Nom:</strong>
                        <LastnameDivision
                            lastName={lastName}
                            changeLastName={changeLastName}
                            changeIsLastNameOk={changeIsLastNameOk}
                        />
                    </div>
                    <div className="infos-section__form__age-div">
                        <strong>Age:</strong>
                        <AgeDivision age={age} changeAge={changeAge} />
                    </div>
                    <div className="infos-section__form__gender-div">
                        <strong>Genre:</strong>
                        <GenderDivision
                            gender={gender}
                            changeChoice={changeGender}
                        />
                    </div>
                </div>
                <div className="profile-infos-section__right-column">
                    <div className="infos-section__form__email-div">
                        <strong>Email:</strong>
                        <EmailDivision
                            changeMail={changeEmail}
                            changeIsEmailOk={changeIsEmailOk}
                            email={email}
                        />
                    </div>
                    <div className="infos-section__form__country-div">
                        <strong>Pays:</strong>
                        <CountryDivision
                            country={country}
                            changeCountry={changeCountry}
                        />
                    </div>
                    <div className="infos-section__form__description-div">
                        <strong>Description:</strong>
                        <DescriptionDivision
                            extraData={infosSectionData}
                            changeDescription={changeDescription}
                        />
                    </div>
                </div>
            </div>
            <ButtonUI
                buttonContent="Confirmer"
                buttonHandler={handleSubmit}
                dynamicClass="plain"
                dynamicId=""
            />
        </form>
    );
};

export default InfosSectionForm;

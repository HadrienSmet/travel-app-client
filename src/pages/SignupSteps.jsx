import { useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { useWindowSize } from "../utils/hooks/hooks";

import SignupPersonalDataForm from "../components/pageSignupSteps/personalDataForm/SignupPersonalDataForm";
import SignupExtraDataForm from "../components/pageSignupSteps/extraDataForm/SignupExtraDataForm";
import signupBanner from "../assets/images/signup-steps-bg.webp";
import StepsIndicator from "../components/pageSignupSteps/stepsIndicator/StepsIndicator";

const useSignupSteps = () => {
    const [signStepState, setSignStepState] = useState({
        stepState: "just-started",
        profilePicture: undefined,
        userPersonals: undefined,
    });

    const changeStepState = (newState) =>
        setSignStepState({ ...signStepState, stepState: newState });
    const changeProfilePicture = (file) =>
        setSignStepState({ ...signStepState, profilePicture: file });
    const changeUserPersonals = (data) =>
        setSignStepState({ ...signStepState, userPersonals: data });

    return {
        signStepState,
        changeProfilePicture,
        changeStepState,
        changeUserPersonals,
    };
};

const useSignupStepsParallax = () => {
    const screenWidth = useWindowSize().width;

    const bgSpeed = screenWidth > 1025 ? -10 : -5;
    const elemSpeed = screenWidth > 1025 ? 30 : 5;

    const parallax = useParallax({
        speed: bgSpeed,
    });
    const elemParallax = useParallax({
        speed: elemSpeed,
    });

    return {
        parallax,
        elemParallax,
    };
};

const SignupSteps = () => {
    const {
        signStepState,
        changeProfilePicture,
        changeStepState,
        changeUserPersonals,
    } = useSignupSteps();
    const { parallax, elemParallax } = useSignupStepsParallax();
    const { stepState, profilePicture, userPersonals } = signStepState;

    return (
        <main className="signup-steps">
            <img
                src={signupBanner}
                alt="Montagnes orientales enveloppées de brume"
                ref={parallax.ref}
                className="signup-steps__background-img"
            />
            <div className="signup-steps__content" ref={elemParallax.ref}>
                <StepsIndicator stepState={stepState} />
                <section className="signup-steps__content__form-container">
                    {stepState === "just-started" && (
                        <SignupPersonalDataForm
                            changeStepState={changeStepState}
                            changeProfilePicture={changeProfilePicture}
                            changeUserPersonals={changeUserPersonals}
                        />
                    )}
                    {stepState === "almost-done" && (
                        <SignupExtraDataForm
                            profilePicture={profilePicture}
                            userPersonals={userPersonals}
                        />
                    )}
                </section>
            </div>
        </main>
    );
};

export default SignupSteps;

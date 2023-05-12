import { useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { useWindowSize } from "../utils/hooks/hooks";

import SignupPersonalDataForm from "../components/pageSignupSteps/personalDataForm/SignupPersonalDataForm";
import SignupExtraDataForm from "../components/pageSignupSteps/extraDataForm/SignupExtraDataForm";
import signupBanner from "../assets/images/signup-steps-bg.webp";
import StepsIndicator from "../components/pageSignupSteps/stepsIndicator/StepsIndicator";
import { useEffect } from "react";

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

const useSignupSteps = ({ parallax }) => {
    const screenWidth = useWindowSize().width;
    const [signStepState, setSignStepState] = useState({
        stepState: "just-started",
        profilePicture: undefined,
        userPersonals: {
            userAuth: undefined,
            userData: undefined,
        },
    });

    const changeStepState = (newState) =>
        setSignStepState({ ...signStepState, stepState: newState });
    const changeProfilePicture = (file) =>
        setSignStepState({ ...signStepState, profilePicture: file });
    const changeUserPersonals = (data) => {
        setSignStepState((curr) => ({
            ...curr,
            userPersonals: {
                userAuth: data.userAuth,
                userData: data.userData,
            },
        }));
    };

    useEffect(() => {
        if (signStepState.stepState === "just-started") {
            if (screenWidth < 1025 && screenWidth > 767)
                parallax.ref.current.style.height = "1180px";
            if (screenWidth < 768) parallax.ref.current.style.height = "1300px";
        } else {
            if (screenWidth < 1025)
                parallax.ref.current.style.height = "1550px";
        }
    }, [signStepState.stepState, screenWidth]);

    useEffect(() => {
        if (
            signStepState.userPersonals.userAuth &&
            signStepState.userPersonals.userData
        ) {
            changeStepState("almost-done");
        }
    }, [signStepState]);

    return {
        signStepState,
        changeProfilePicture,
        changeUserPersonals,
    };
};

const SignupSteps = () => {
    const { parallax, elemParallax } = useSignupStepsParallax();
    const { signStepState, changeProfilePicture, changeUserPersonals } =
        useSignupSteps({ parallax });
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
                            changeProfilePicture={changeProfilePicture}
                            changeUserPersonals={(data) =>
                                changeUserPersonals(data)
                            }
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

import { useEffect, useRef } from "react";
import StepContainer from "./StepContainer";

const useStepsIndicator = ({ stepState }) => {
    const firstStepCheckRef = useRef(null);
    const scdStepCheckRef = useRef(null);
    const thirdStepCheckRef = useRef(null);

    //This useEffect is here to show to the user on wich step of the signup form he stands
    useEffect(() => {
        if (stepState === "just-started") {
            firstStepCheckRef.current.classList.add("visible");
        }
        if (stepState === "almost-done") {
            scdStepCheckRef.current.classList.add("visible");
        }
    }, [stepState]);

    return {
        firstStepCheckRef,
        scdStepCheckRef,
        thirdStepCheckRef,
    };
};

const StepsIndicator = ({ stepState }) => {
    const { firstStepCheckRef, scdStepCheckRef, thirdStepCheckRef } =
        useStepsIndicator({
            stepState,
        });
    return (
        <section className="signup-steps__content__steps-indicator">
            <StepContainer
                checkRef={firstStepCheckRef}
                stepContent="1. Authentification"
                dynamicId="auth"
                dotId="dot-step1"
            />
            <StepContainer
                checkRef={scdStepCheckRef}
                stepContent="2. Informations personnelles"
                dynamicId="perso"
                dotId="dot-step2"
            />
            <StepContainer
                checkRef={thirdStepCheckRef}
                stepContent="3. Informations facultatives"
                dynamicId="extra"
                dotId="dot-step3"
            />
        </section>
    );
};

export default StepsIndicator;

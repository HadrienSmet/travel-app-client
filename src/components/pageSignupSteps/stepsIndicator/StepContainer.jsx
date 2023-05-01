import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const StepContainer = ({ checkRef, stepContent, dynamicId, dotId }) => {
    return (
        <div className="signup-steps__content__step">
            <div className="signup-steps__content__step__icons-container">
                <div className="ref-div" ref={checkRef}>
                    <FaCheck
                        id={`step-${dynamicId}-check`}
                        className="signup-steps__content__step__check-icon"
                    />
                </div>
                <FaTimes
                    id={`step-${dynamicId}-times`}
                    className="signup-steps__content__step__times-icon"
                />
            </div>
            <span className="signup-steps__content__step-dot" id={dotId}></span>
            <p>{stepContent}</p>
        </div>
    );
};

export default StepContainer;

import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const useInputTextUI = ({ value }) => {
    const labelRef = useRef(null);
    useEffect(() => {
        const handleLabel = () => {
            if (value !== "") {
                labelRef.current?.classList.add("filled");
            } else {
                labelRef.current?.classList.remove("filled");
            }
        };
        handleLabel();
    }, [value]);

    return {
        labelRef,
    };
};

const InputTextUI = ({
    inputType,
    value,
    dynamicClass,
    dynamicName,
    inputHandler,
    isRequired,
    dataHandler,
}) => {
    const { labelRef } = useInputTextUI({ value });

    const handleBlur = () => {
        if (dataHandler) dataHandler();
    };

    return (
        <div className={`mui-input-text ${dynamicClass}`}>
            <input
                type={inputType}
                name={dynamicName}
                onChange={inputHandler}
                onBlur={handleBlur}
                required={isRequired}
            />
            <label ref={labelRef} htmlFor={dynamicName}>
                {dynamicName}
            </label>
        </div>
    );
};

InputTextUI.defaultProps = {
    dataHandler: null,
};

export default InputTextUI;

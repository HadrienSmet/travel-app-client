import { useRef, useEffect } from "react";

const useTextareaUI = ({ value }) => {
    const labelRef = useRef(null);
    const textareaRef = useRef(null);
    useEffect(() => {
        value;
        if (value !== "") {
            labelRef.current?.classList.add("filled");
        } else {
            labelRef.current?.classList.remove("filled");
        }
    }, [value]);
    useEffect(() => {
        textareaRef.current.value = value; // Mise à jour de la valeur de la textarea
    }, [value, textareaRef]);
    return {
        labelRef,
        textareaRef,
    };
};

const TextareaUI = ({
    dynamicClass,
    dynamicName,
    dynamicLabel,
    dynamicRef,
    value,
    changeHandler,
    blurHandler,
}) => {
    const { labelRef, textareaRef } = useTextareaUI({ value });
    return (
        <div ref={dynamicRef} className={`mui-textarea ${dynamicClass}`}>
            <textarea
                ref={textareaRef}
                name={dynamicName}
                onChange={changeHandler}
                onBlur={blurHandler}
            >
                {value}
            </textarea>
            <label ref={labelRef} htmlFor={dynamicName}>
                {dynamicLabel}
            </label>
        </div>
    );
};

export default TextareaUI;

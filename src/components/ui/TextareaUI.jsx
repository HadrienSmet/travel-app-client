import { useRef } from "react";

const useTextareaUI = ({ value }) => {
    const labelRef = useRef(null);
    if (value !== "") {
        labelRef.current?.classList.add("filled");
    } else {
        labelRef.current?.classList.remove("filled");
    }
    return {
        labelRef,
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
    const { labelRef } = useTextareaUI({ value });
    return (
        <div ref={dynamicRef} className={`mui-textarea ${dynamicClass}`}>
            <textarea
                name={dynamicName}
                onChange={changeHandler}
                onBlur={blurHandler}
            ></textarea>
            <label ref={labelRef} htmlFor={dynamicName}>
                {dynamicLabel}
            </label>
        </div>
    );
};

export default TextareaUI;

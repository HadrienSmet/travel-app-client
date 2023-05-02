import { useRef } from "react";

const useMuiTextarea = ({ value }) => {
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

const MuiTextarea = ({
    dynamicClass,
    dynamicName,
    dynamicLabel,
    value,
    changeHandler,
    blurHandler,
}) => {
    const { labelRef } = useMuiTextarea({ value });
    return (
        <div className={`mui-textarea ${dynamicClass}`}>
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

export default MuiTextarea;

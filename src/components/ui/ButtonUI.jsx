const ButtonUI = ({
    buttonHandler,
    buttonContent,
    dynamicClass,
    dynamicId,
}) => {
    return (
        <button
            id={dynamicId}
            className={`mui-button ${dynamicClass}`}
            onClick={buttonHandler}
        >
            {buttonContent}
        </button>
    );
};

ButtonUI.defaultProps = {
    dynamicId: "",
};

export default ButtonUI;

const ButtonUI = ({ buttonHandler, buttonContent, dynamicClass }) => {
    return (
        <button
            className={`mui-button ${dynamicClass}`}
            onClick={buttonHandler}
        >
            {buttonContent}
        </button>
    );
};

export default ButtonUI;

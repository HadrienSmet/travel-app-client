import React from "react";

const MuiButton = ({ buttonHandler, buttonContent }) => {
    return (
        <button className="mui-button" onClick={buttonHandler}>
            {buttonContent}
        </button>
    );
};

export default MuiButton;

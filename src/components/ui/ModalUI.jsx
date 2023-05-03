import ReactDOM from "react-dom";

const ModalUI = ({ isOpen, closeModal, children, dynamicClass, portal }) => {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className="mui-modal">
            <div className="mui-modal__overlay" onClick={closeModal}></div>
            <div className={`mui-modal__content ${dynamicClass}`}>
                {children}
            </div>
        </div>,
        document.getElementById(portal)
    );
};

export default ModalUI;

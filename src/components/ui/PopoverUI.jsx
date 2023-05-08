const PopoverUI = ({ dynamicClass, children, isOpen }) => {
    if (!isOpen) return null;
    return <div className={`${dynamicClass} popover-ui`}>{children}</div>;
};

export default PopoverUI;

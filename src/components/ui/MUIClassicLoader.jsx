const MUIClassicLoader = ({ dynamicId }) => {
    return (
        <div className="gradient-container">
            <div className="gradient" id={dynamicId}>
                <div className="element"></div>
            </div>
        </div>
    );
};

export default MUIClassicLoader;

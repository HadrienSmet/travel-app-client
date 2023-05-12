const PictureInput = ({ profilePictureUrl, handleProfilePicture }) => {
    return (
        <>
            {profilePictureUrl === "" ? (
                <label htmlFor="signup-file">Choisir une photo</label>
            ) : (
                <label htmlFor="signup-file">Changer de photo</label>
            )}
            <input
                type="file"
                name="file"
                id="signup-file"
                accept=".jpg, .jpeg, .png"
                onChange={handleProfilePicture}
            />
        </>
    );
};

export default PictureInput;

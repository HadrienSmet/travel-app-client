const InfosSectionContent = ({ dataFrom, isAuthor }) => {
    return (
        <>
            {isAuthor ? (
                <h1>Mes informations personnelles :</h1>
            ) : (
                <h1>Ses informations personnelles :</h1>
            )}
            <div className="profile-infos-section__content">
                <div className="profile-infos-section__left-column">
                    <span>
                        <strong>Prénom: </strong>
                        {isAuthor
                            ? dataFrom.firstName
                            : dataFrom.userData.firstName}
                    </span>
                    <span>
                        <strong>Nom: </strong>
                        {isAuthor
                            ? dataFrom.lastName
                            : dataFrom.userData.lastName}
                    </span>
                    <span>
                        <strong>Age: </strong>
                        {isAuthor ? dataFrom.age : dataFrom.userData.age}
                    </span>
                    <span>
                        <strong>Genre: </strong>
                        {isAuthor ? dataFrom.gender : dataFrom.userData.gender}
                    </span>
                </div>
                <div className="profile-infos-section__right-column">
                    <span>
                        <strong>Email: </strong>
                        {dataFrom.email}
                    </span>
                    <span>
                        <strong>Pays: </strong>
                        {isAuthor
                            ? dataFrom.country
                            : dataFrom.userData.country}
                    </span>
                    <span>
                        <strong>Description: </strong>
                        <br />
                        {dataFrom.description}
                    </span>
                    <div className="profile-infos-section__dream-trips-div">
                        {isAuthor ? (
                            <strong>Mes destinations des rêve: </strong>
                        ) : (
                            <strong>Ses destinations des rêve: </strong>
                        )}
                        <ul>
                            {dataFrom.dreamTrips.map((destination) => (
                                <li key={destination}>{destination}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfosSectionContent;

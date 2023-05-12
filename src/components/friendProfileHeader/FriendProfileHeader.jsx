import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import HeaderBackground from "./HeaderBackground";
import UserIntro from "./UserIntro";

const useFriendProfileHeader = () => {
    const [defaultBg, setDefaultBg] = useState(true);
    const friendProfile = useSelector(
        (state) => state.friendDataStore.friendData
    );

    const handleDefaultBg = (boolean) => setDefaultBg(boolean);

    useEffect(() => {
        if (friendProfile.coverPicture !== undefined) {
            handleDefaultBg(false);
        }
    }, [friendProfile.coverPicture]);

    return {
        defaultBg,
    };
};

const FriendProfileHeader = () => {
    const { defaultBg } = useFriendProfileHeader();
    return (
        <div className="profile-section__header">
            <HeaderBackground defaultBg={defaultBg} />
            <UserIntro />
        </div>
    );
};

export default FriendProfileHeader;

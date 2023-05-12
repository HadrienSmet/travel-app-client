import {
    FaRegThumbsDown,
    FaRegThumbsUp,
    FaThumbsDown,
    FaThumbsUp,
} from "react-icons/fa";
import { getJwtToken } from "../../../utils/functions/tools/getJwtToken";
import { useState } from "react";
import { axiosPostDislikes } from "../../../utils/functions/posts/axiosPostDislikes";
import { axiosPostLikes } from "../../../utils/functions/posts/axiosPostLikes";
import { useEffect } from "react";

const useLikesButtons = ({ post, token, userId }) => {
    const [likesData, setLikesData] = useState({
        likes: post.likes,
        dislikes: post.dislikes,
        usersLiking: post.usersLiked,
        usersDisliking: post.usersDisliked,
    });
    const { likes, dislikes, usersLiking, usersDisliking } = likesData;
    const changeLikes = (bool) => {
        if (bool) setLikesData({ ...likesData, likes: likesData.likes++ });
        if (!bool) setLikesData({ ...likesData, likes: likesData.likes-- });
    };
    const changeUsersLiking = (newArr) =>
        setLikesData({ ...likesData, usersLiking: newArr });
    const changeDislikes = (bool) => {
        if (bool)
            setLikesData({ ...likesData, dislikes: likesData.dislikes++ });
        if (!bool)
            setLikesData({ ...likesData, dislikes: likesData.dislikes-- });
    };
    const changeUsersDisliking = (newArr) =>
        setLikesData({ ...likesData, usersDisliking: newArr });

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    useEffect(() => {
        if (post.usersLiked.find((element) => element === userId) !== undefined)
            setLiked(true);
        if (
            post.usersDisliked.find((element) => element === userId) !==
            undefined
        )
            setLiked(true);
    }, []);

    //Handles the behavior of the app when a user clicks on the like button
    //If the user already liked the post:
    //-->The like is removed from the database and from the localState
    //Else:
    //-->The like is added to the database and to the LocalState
    const likesHandler = () => {
        if (usersLiking.includes(userId)) {
            axiosPostLikes(post._id, 0, token).then(() => {
                changeLikes(false);
                setLiked(false);
                changeUsersLiking(usersLiking.filter((id) => id !== userId));
            });
        } else if (!usersDisliking.includes(userId)) {
            axiosPostLikes(post._id, 1, token).then(() => {
                changeLikes(true);
                setLiked(true);
                changeUsersLiking([...usersLiking, userId]);
            });
        }
    };

    //Handles the behavior of the app when a user clicks on the dislike button
    //If the user already disliked the post:
    //-->The dislike is removed from the database and from the localState
    //Else:
    //-->The dislike is added to the database and to the LocalState
    const dislikesHandler = () => {
        if (usersDisliking.includes(userId)) {
            axiosPostDislikes(post._id, 0, token).then(() => {
                changeDislikes(false);
                setDisliked(false);
                changeUsersDisliking(
                    usersDisliking.filter((id) => id !== userId)
                );
            });
        } else if (!usersLiking.includes(userId)) {
            axiosPostDislikes(post._id, -1, token).then(() => {
                changeDislikes(true);
                setDisliked(true);
                changeUsersDisliking([...usersDisliking, userId]);
            });
        }
    };

    return {
        likes,
        liked,
        dislikes,
        disliked,
        likesHandler,
        dislikesHandler,
    };
};

const OpinionSide = ({ post }) => {
    const { token, userId } = getJwtToken();
    const { likes, liked, dislikes, disliked, likesHandler, dislikesHandler } =
        useLikesButtons({
            post,
            token,
            userId,
        });
    return (
        <div className="post__buttons-row__opinion-side">
            <div className="post__buttons-row__likes">
                <p>{likes}</p>
                {liked ? (
                    <FaThumbsUp onClick={likesHandler} />
                ) : (
                    <FaRegThumbsUp onClick={likesHandler} />
                )}
            </div>
            <div className="post__buttons-row__dislikes">
                <p>{dislikes}</p>
                {disliked ? (
                    <FaThumbsDown onClick={dislikesHandler} />
                ) : (
                    <FaRegThumbsDown onClick={dislikesHandler} />
                )}
            </div>
        </div>
    );
};

export default OpinionSide;

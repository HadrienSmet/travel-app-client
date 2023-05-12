import { useState, useEffect } from "react";
import { getJwtToken } from "../../utils/functions/tools/getJwtToken";
import { useSelector } from "react-redux";

import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostButtonsRow from "./postButtonsRow/PostButtonsRow";

const usePost = ({ post }) => {
    const { userId } = getJwtToken();
    const postsData = useSelector((state) => state.postsDataStore.postsData);
    const [postState, setPostState] = useState({
        isAuthor: false,
        isEditing: false,
        imageUrl: post.imageUrl,
        newText: "",
        newImage: undefined,
    });

    const changeIsAuthor = (boolean) =>
        setPostState((curr) => ({ ...curr, isAuthor: boolean }));
    const changeIsEditing = (boolean) =>
        setPostState((curr) => ({ ...curr, isEditing: boolean }));
    const changeImageUrl = (url) =>
        setPostState((curr) => ({ ...curr, imageUrl: url }));
    const changeNewText = (e) =>
        setPostState((curr) => ({ ...curr, newText: e.target.value }));
    const changeNewImage = (img) =>
        setPostState((curr) => ({ ...curr, newImage: img }));

    useEffect(() => {
        if (
            userId === post.userId ||
            userId === JSON.stringify(import.meta.env.VITE_REACT_APP_ADMIN_ID)
        ) {
            changeIsAuthor(true);
        } else {
            changeIsAuthor(false);
        }
    }, [userId, post.userId, postsData]);

    useEffect(() => {
        changeImageUrl(post.imageUrl);
    }, [post.imageUrl]);

    return {
        postState,
        changeImageUrl,
        changeIsEditing,
        changeNewImage,
        changeNewText,
    };
};

const Post = ({ post }) => {
    const {
        postState,
        changeImageUrl,
        changeIsEditing,
        changeNewImage,
        changeNewText,
    } = usePost({ post });
    const { isAuthor, isEditing, imageUrl, newImage, newText } = postState;

    return (
        <div key={post._id} className="post-container">
            <PostHeader post={post} />
            <PostContent
                isEditing={isEditing}
                imageUrl={imageUrl}
                post={post}
                setImageUrl={changeImageUrl}
                setNewImage={changeNewImage}
                setNewText={changeNewText}
            />
            <PostButtonsRow
                post={post}
                isAuthor={isAuthor}
                newImage={newImage}
                newText={newText}
                setIsEditing={changeIsEditing}
                isEditing={isEditing}
            />
        </div>
    );
};

export default Post;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, setPostsData } from "../../../features/postsData.slice";

import { axiosDeletePost } from "../../../utils/functions/posts/axiosDeletePost";
import { axiosGetPosts } from "../../../utils/functions/posts/axiosGetPosts";
import { axiosEditPost } from "../../../utils/functions/posts/axiosEditPost";
import { getJwtToken } from "../../../utils/functions/tools/getJwtToken";

import { FaEdit, FaPaperPlane, FaTimes } from "react-icons/fa";
import MUIClassicLoader from "../../ui/MUIClassicLoader";
import ButtonUI from "../../ui/ButtonUI";

const useCrudButtons = ({ post, token, newImage, newText, setIsEditing }) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    //This function is here to handle the suppresion of a post
    //@Params { type: Object } => the param from the onClick event
    //The control structure is only here to be sure that the element we target got the right id
    //Then we make a call API to delete the post and the file in the data base and then on the store redux
    const handleDeletePost = (e) => {
        let postId;
        if (e.target.id === "") {
            postId = e.target.parentElement.id.split("-")[1];
        } else {
            postId = e.target.id.split("-")[1];
        }
        axiosDeletePost(postId, token).then(() => {
            setIsLoading((curr) => !curr);
            dispatch(deletePost(postId));
            axiosGetPosts(token).then((res) => {
                setIsLoading((curr) => !curr);
                dispatch(setPostsData(res.data));
            });
        });
    };

    //This function we create a new Object for the call API whith the constructor FormData()
    //This new Object takes three properties the first one is the id of the user
    //The second one represents the text. And it takes either the old data or if the user inserted a new text this property will takes the new data as value
    //The third one represents the file. And it takes either the old data or if the user inserted a new picture this property will takes the new data as value
    const handleEditFormData = () => {
        const data = new FormData();
        data.append("userId", post.userId);
        newText !== ""
            ? data.append("text", newText)
            : data.append("text", post.text);
        newImage !== undefined
            ? data.append("file", newImage)
            : data.append("file", post.imageUrl);

        return data;
    };

    //This function handles the modification of a post
    //@Params { type: Object } => the param of the onClick event
    //The control structure is only here to be sure we target the right element on the DOM
    //Then two calls API are made.
    //The first one is here to modificate the post
    //The second one is here to get all the posts once again in order to be able to display the new one
    const handleEditPost = (e) => {
        setIsLoading(() => true);
        const data = handleEditFormData();
        let postId;
        if (e.target.id === "") {
            postId = e.target.parentElement.id.split("-")[1];
        } else {
            postId = e.target.id.split("-")[1];
        }
        axiosEditPost(postId, data, token).then(() => {
            setIsEditing(false);
            axiosGetPosts(token).then((res) => {
                setIsLoading(() => false);
                dispatch(setPostsData(res.data));
            });
        });
    };

    return {
        isLoading,
        handleDeletePost,
        handleEditPost,
    };
};

const CrudSide = ({
    post,
    isAuthor,
    newImage,
    newText,
    setIsEditing,
    isEditing,
}) => {
    const { token } = getJwtToken();
    const { isLoading, handleDeletePost, handleEditPost } = useCrudButtons({
        post,
        token,
        newImage,
        newText,
        setIsEditing,
    });

    return (
        <>
            {isLoading ? (
                <MUIClassicLoader dynamicId="post-edit-loader" />
            ) : (
                <div className="post__buttons-row__crud-side">
                    {isAuthor && (
                        <>
                            <ButtonUI
                                buttonContent={<FaEdit />}
                                buttonHandler={() => setIsEditing(!isEditing)}
                                dynamicClass=""
                            />
                            <ButtonUI
                                buttonContent={
                                    <FaTimes
                                        id={"delete-" + post._id}
                                        onClick={handleDeletePost}
                                    />
                                }
                                buttonHandler={handleDeletePost}
                                dynamicClass=""
                                dynamicId={`deletediv-${post._id}`}
                            />
                        </>
                    )}
                    {isEditing && (
                        <ButtonUI
                            buttonContent={
                                <FaPaperPlane
                                    id={"editpost-" + post._id}
                                    onClick={handleEditPost}
                                />
                            }
                            buttonHandler={handleEditPost}
                            dynamicClass=""
                            dynamicId={"editpostdiv-" + post._id}
                        />
                    )}
                </div>
            )}
        </>
    );
};

export default CrudSide;

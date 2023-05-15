import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setPostsData } from "../../features/postsData.slice";

import { getJwtToken } from "../../utils/functions/tools/getJwtToken";
import { axiosCreatePost } from "../../utils/functions/posts/axiosCreatePost";
import { axiosGetPosts } from "../../utils/functions/posts/axiosGetPosts";
import { useButtonUI, useWindowSize } from "../../utils/hooks/hooks";

import MUIClassicLoader from "../ui/MUIClassicLoader";
import ButtonUI from "../ui/ButtonUI";
import TextareaUI from "../ui/TextareaUI";
import { FaFileImage, FaPaperPlane } from "react-icons/fa";

const usePostForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [postFormState, setPostFormState] = useState({
        postText: "",
        postFile: "",
        postFileUrl: "",
    });

    const dispatch = useDispatch();
    const userData = useSelector(
        (state) => state.userLoggedDataStore.userLoggedData
    );

    const changePostText = (e) =>
        setPostFormState((curr) => ({ ...curr, postText: e.target.value }));
    const changePostFile = (e) =>
        setPostFormState((curr) => ({ ...curr, postFile: e.target.files[0] }));
    const changePostFileUrl = (e) =>
        setPostFormState((curr) => ({
            ...curr,
            postFileUrl: URL.createObjectURL(e.target.files[0]),
        }));
    const resetPostState = () => {
        setPostFormState((curr) => ({
            ...curr,
            postText: "",
            postFile: "",
            postFileUrl: "",
        }));
    };

    //This function handles the file that is meant to be posted
    //@Params { type: Object } => the param of the onChange event listening the file input
    //The first local state is here to create a blop url in order to display the file directly on the DOM
    //The second local state is here to contain the file that will be send to the data base
    const handlePostFile = (e) => {
        changePostFile(e);
        changePostFileUrl(e);
    };

    //This function handles the data to send to the API
    //@Params { type: string } => The id of the user
    //It creates an object containing all the data for the call API with the constructor FormData()
    //It takes several properties but the two lasts are the more important.
    //The property referring to the text doesn't need to be dynamic because if the user doens't insert a text the property will just takes empty strings as value
    //The property referring to the file has to be dynamic it is only presents if a file has been provided by the user
    const handlePostFormData = (userId) => {
        let date = new Date();
        date = Date.now();

        const post = new FormData();
        post.append("userId", userId);
        post.append("country", userData.country);
        post.append("date", date);
        post.append("pseudo", userData.pseudo);
        post.append("profilePicture", userData.profilePicture);
        post.append("text", postFormState.postText);
        postFormState.postFile !== "" &&
            post.append("file", postFormState.postFile);

        return post;
    };

    //This function handles the submission of a post
    //Then this function makes two calls API
    //The first one posts the data to the data base and clears the local states
    //The second (called by the first) is getting all the posts from the data base and places them in the redux store
    const handlePostSubmission = (e) => {
        e.preventDefault();
        useButtonUI(e);
        let { userId, token } = getJwtToken();
        const post = handlePostFormData(userId);
        resetPostState();

        setIsLoading((curr) => !curr);
        axiosCreatePost(post, token).then(() => {
            axiosGetPosts(token)
                .then((res) => {
                    setIsLoading((curr) => !curr);
                    dispatch(setPostsData(res.data));
                })
                .catch((err) => console.log(err));
        });
    };

    return {
        isLoading,
        userData,
        postFormState,
        changePostText,
        handlePostFile,
        handlePostSubmission,
    };
};

const PostsForm = () => {
    const screenWidth = useWindowSize().width;
    const {
        isLoading,
        userData,
        postFormState,
        changePostText,
        handlePostFile,
        handlePostSubmission,
    } = usePostForm();
    const { postText, postFileUrl } = postFormState;

    return (
        <form action="" className="posts-form" encType="multipart/form-data">
            <TextareaUI
                inputType="text"
                value={postText}
                dynamicClass=""
                dynamicName="post"
                dynamicLabel="Exprime-toi!"
                changeHandler={changePostText}
                isRequired={false}
                dataHandler={null}
            />
            <div className="posts-form__buttons-row">
                {postFileUrl === "" ? (
                    <label htmlFor="post-file">
                        {screenWidth > 768 ? (
                            <span>Ajouter une image</span>
                        ) : (
                            <FaFileImage />
                        )}
                    </label>
                ) : (
                    <img
                        src={postFileUrl}
                        alt={"Photo que " + userData.pseudo + " va poster"}
                    />
                )}

                <input
                    type="file"
                    name="file"
                    id="post-file"
                    onChange={handlePostFile}
                />
                {isLoading ? (
                    <MUIClassicLoader dynamicId="posts-loader" />
                ) : (
                    <ButtonUI
                        buttonContent={
                            screenWidth > 768 ? (
                                <span>Poster</span>
                            ) : (
                                <FaPaperPlane />
                            )
                        }
                        buttonHandler={handlePostSubmission}
                        dynamicClass="posts-form__buttons-row-post"
                    />
                )}
            </div>
        </form>
    );
};

export default PostsForm;

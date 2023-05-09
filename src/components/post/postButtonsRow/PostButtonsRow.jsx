import OpinionSide from "./OpinionSide";
import CrudSide from "./CrudSide";

const PostButtonsRow = ({
    post,
    isAuthor,
    newImage,
    newText,
    setIsEditing,
    isEditing,
}) => {
    return (
        <div className="post__buttons-row">
            <OpinionSide post={post} />
            <CrudSide
                post={post}
                isAuthor={isAuthor}
                newImage={newImage}
                newText={newText}
                setIsEditing={setIsEditing}
                isEditing={isEditing}
            />
        </div>
    );
};

export default PostButtonsRow;

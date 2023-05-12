import Post from "../post/Post";
import MUIClassicLoader from "../ui/MUIClassicLoader";
import PostsForm from "./PostsForm";

const HomeContent = ({ noResult, dataArrayForSort }) => {
    return (
        <div id="home_anchor" className="home__main">
            <div className="home__posts-division">
                <PostsForm />
                {noResult && (
                    <h3>Aucuns posts n'a encore été créé dans ce pays</h3>
                )}
                {!noResult &&
                    dataArrayForSort !== null &&
                    dataArrayForSort
                        .sort((a, b) => b.date - a.date)
                        .map((post, index) => <Post key={index} post={post} />)}
            </div>
        </div>
    );
};

export default HomeContent;

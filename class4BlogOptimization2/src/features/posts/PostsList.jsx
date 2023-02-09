import {useSelector} from "react-redux"
import { selectPostIds, getPostsStatus, getPostsError} from "./postsSlice";
// instead of selectAllPosts, we'll be using selectPostIds
import PostsExcerpt from './PostsExcerpt'


const PostsList = () => {

    // const posts = useSelector(selectAllPosts)
    const orderedPostsIds = useSelector(selectPostIds)
    const postsStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)
    

    let content;
    if(postsStatus === 'loading'){
      content = <p>"Loading...</p>
    }else if(postsStatus === 'succeeded'){
      // const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
  
    content = orderedPostsIds.map((postId) => (
        <PostsExcerpt key={postId} postId={postId} />
      ));

    } else if(postsStatus === 'failed'){
      content = <p>{error}</p>
    }


  return (
		<section>
			<h2>Posts</h2>

			{ content }
		</section>
	);
}

export default PostsList
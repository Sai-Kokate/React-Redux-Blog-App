import { selectPostIds, getPostsError, getPostsStatus } from "./postsSlice";
import React from "react";
import { useSelector } from "react-redux";
// import {selectAllPosts} from "./postsSlice";

import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  // const posts = useSelector(selectAllPosts);
  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (effectRan.current === false) {
  //     if (postsStatus === "idle") {
  //       dispatch(fetchPosts());
  //     }

  //     return () => {
  //       console.log("unmounted");
  //       effectRan.current = true;
  //     };
  //   }
  // }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    // const orderedPosts = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));
    // content = orderedPosts.map((post) => (
    //   <PostsExcerpt key={post.id} post={post} />
    // ));

    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return <section>{content}</section>;
};

export default PostsList;

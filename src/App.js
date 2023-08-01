import AddPostsForm from "./features/posts/AddPostsForm";
import PostsList from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostsForm />} />
          <Route path=":postId/" element={<SinglePostPage />} />
          <Route path="edit/:postId/" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

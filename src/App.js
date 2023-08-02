import AddPostsForm from "./features/posts/AddPostsForm";
import PostsList from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import UserPage from "./features/users/UserPage";
import UsersList from "./features/users/UsersList";
import Layout from "./components/Layout";
import { Route, Routes, Navigate } from "react-router-dom";

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

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId/" element={<UserPage />} />
        </Route>

        {/* Catch all - replace with 404 component and redirect   */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;

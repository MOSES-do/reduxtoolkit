import PostsList from "./features/posts/PostsList"
import AddPostForm from "./features/posts/AddPostForm";
import './App.css'
import SinglePostPage from "./features/posts/SinglePostPage"
import Layout from "./components/Layout"
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import EditPostForm from "./features/posts/EditPostForm";

function App() {

  return (
    <>
        <Header/>
      <Routes>
        <Route path="/" element={<Layout />}/>

        {/* serves as homepage for the website */}
        <Route index element={<PostsList />}/>

        <Route path="post">
          <Route index element={<AddPostForm />}/>
          <Route path=":postId" element={<SinglePostPage />}/>
          <Route path="edit/:postId" element={<EditPostForm />}/>
        </Route>
      </Routes>
      </>
  )
}

export default App

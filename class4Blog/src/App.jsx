import { useState } from 'react'
import PostsList from "./features/posts/PostsList"
import AddPostForm from "./features/posts/AddPostForm";
import './App.css'

function App() {

  return (
    <main className="App">
      <AddPostForm/>
      <PostsList />
    </main>
  )
}

export default App

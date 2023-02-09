import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {store} from './app/store'
import {Provider} from 'react-redux'
import {fetchPosts} from './features/posts/postsSlice'
import {fetchUsers} from './features/users/usersSlice'
import {BrowserRouter} from 'react-router-dom'

store.dispatch(fetchPosts())//Retrieve posts on the load of web page
store.dispatch(fetchUsers())//Retrieve users on the load of web page


ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <Provider store={store}>
           <BrowserRouter>
            <App/>
           </BrowserRouter>
        </Provider>
    // </React.StrictMode>
)

npm install @reduxjs/toolkit react-redux


A slice is splitting redux state objects into multiple slices of state. It is a collection of reducer logic and actions for a single feature in the app. E.g. A blog may have a slice for post and another slice for comment.

We'll be making useo f axios in this build to fetch data asynchronously - npm i axios


# Params will be installed to be able to access
npm i react-router-dom

# Optimization
1. Optimized Userpage rendering issue using (createSelector in postsSlice)

# State normalization

- Recommended in docs
- No duplication of data
- Create an ID lookup

React redux and  normalization provides a createEntityAdapter API

- Abstracts more logic from components
- Built-in CRUD methods
- Automatic selector generation
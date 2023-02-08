import {createSlice} from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"
import {sub} from 'date-fns'


const initialState = [
	{
		id: "1",
		title: "Learning Redux Toolkit",
		content: "I've heard good things",
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0,
		},
	},
	{
		id: "2",
		title: "Slices...",
		content: "The more I say slice, the more I want pizza.",
		date: sub(new Date(), { minutes: 5 }).toISOString(),
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0,
		},
	},
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer (state, action)  {
                    state.push(action.payload)//managed by immerjs
                },
                prepare(title, content, userId){
                    return {
                            payload: {
                                id: nanoid(),
                                title,
                                content,
                                date: new Date().toISOString(),
                                userId,
                                reactions: {
                                    thumbsUp: 0,
                                    wow: 0,
                                    heart: 0,
                                    rocket: 0,
                                    coffee: 0,
                                },
                            },
                    };
                }
        },

        reactionAdded(state, action){
            const {postId, reaction} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }


})

export const {postAdded, reactionAdded} = postsSlice.actions;
//THis caters for a situation where the structurer of post state changes we only change it once in the slice, without worrying about making changes in its children components
export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer
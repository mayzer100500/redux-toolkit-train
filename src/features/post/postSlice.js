import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    loading: false,
}

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch(setPosts(res.data))
    }
)

export const deletePostById = createAsyncThunk(
    "posts/deletePostById",
    async (id, { rejectWithValue, dispatch }) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(deletePost(id))
    }
)

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(it => it.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.loading = false
            console.log(`POST fulfilled ${state.loading}`)
        })
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true
            console.log(`POST pending ${state.loading}`)
        })
        builder.addCase(getPosts.rejected, (state, action) => { console.log("POST rejected") })
        builder.addCase(deletePostById.fulfilled, (state, action) => { console.log("DELETE fulfilled") })
        builder.addCase(deletePostById.pending, (state, action) => { console.log("DELETE pending") })
        builder.addCase(deletePostById.rejected, (state, action) => { console.log("DELETE rejected") })
    }
})

export const { setPosts, deletePost } = postSlice.actions
export default postSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleTodoCompleted: (state, action) => {
            state.todos.map(it => it.id === action.payload ? it.isCompleted = !it.isCompleted : it)
        },
        deleteTodoItem: (state, action) => {
            state.todos = state.todos.filter(it => it.id !== action.payload)
        }
    },
})

export const { addTodo, toggleTodoCompleted, deleteTodoItem } = todoSlice.actions
export default todoSlice.reducer
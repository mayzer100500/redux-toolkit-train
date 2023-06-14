import React from 'react'
import { toggleTodoCompleted, deleteTodoItem } from "../features/todo/todoSlice"
import { useDispatch } from 'react-redux'

const TodoItem = (props) => {
    const dispatch = useDispatch()
    return (
        <div className='flex justify-between items-center my-2'>
            <div
                className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'
                onClick={() => dispatch(toggleTodoCompleted(props.value.id))}
            >
                Complete
            </div>
            <div className={`text-sm ${props.value.isCompleted ? 'line-through font-medium text-lime-400' : ''}`}>
                {props.value.text}
            </div>
            <div
                className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'
                onClick={() => dispatch(deleteTodoItem(props.value.id))}
            >
                Delete
            </div>
        </div>
    )
}

export default TodoItem

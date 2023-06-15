import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { v4 as uuidv4 } from 'uuid'
import Alert from '@mui/material/Alert';

const Form = () => {
    const dispatch = useDispatch()
    const [todoValue, setTodoValue] = useState("")
    const [alert, setAlert] = useState(false)

    const addTodoHandler = () => {
        const todo = {
            id: uuidv4(),
            text: todoValue,
            isCompleted: false,
        }
        if (todo.text === "") {
            setAlert(true)
        } else {
            dispatch(addTodo(todo))
            setTodoValue("")
            setAlert(false)
        }
    }

    return (
        <div>
            <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
                <input
                    type='text'
                    name="todoItem"
                    value={todoValue}
                    placeholder='Type something...'
                    className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
                    onChange={(e) => setTodoValue(e.target.value)}
                />
                <button
                    type='submit'
                    className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
                    onClick={() => addTodoHandler()}
                >
                    Submit
                </button>
            </form>
            {alert &&
                <Alert variant="filled" severity="warning">Please, fill todo!!!</Alert>}
        </div>
    )
}

export default Form

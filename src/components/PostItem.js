import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePostById } from '../features/post/postSlice'
import 'remixicon/fonts/remixicon.css'

const PostItem = ({ post }) => {
    const [isHovered, setIsHovered] = useState(false)
    const dispatch = useDispatch()
    return (
        <div
            className='flex items-center'>
            <div
                className='flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm mt-4'
            >
                {post.title}
            </div>
            <div className='w-5 mt-4 px-1'>
                <i
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => dispatch(deletePostById(post.id))}
                    className={`ri-delete-bin-${isHovered ? "fill" : "line"} cursor-pointer`}></i>
            </div>
        </div>
    )
}

export default PostItem

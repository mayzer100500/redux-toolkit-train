import React from 'react'
import PostItem from './PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../features/post/postSlice'
import { Watch } from 'react-loader-spinner'

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)
    const isLoading = useSelector((state) => state.post.loading)
    const postElements = posts.map(it => (
        <PostItem key={it.id} post={it} />

    ))
    return (
        <div>
            <button
                type='submit'
                onClick={() => dispatch(getPosts())}
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >{postElements && "Get posts"}
            </button>
            {isLoading &&
                <div className='flex justify-center h-full'>
                    <Watch
                        height="100"
                        width="100"
                        radius="48"
                        color="white"
                        ariaLabel="watch-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </div>}
            {postElements.length > 0 && postElements}
        </div>
    )
}

export default Posts

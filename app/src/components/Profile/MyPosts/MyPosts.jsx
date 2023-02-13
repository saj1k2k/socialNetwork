import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElments 
        = props.posts.map( p => <Post likeCount={p.likesCount} message={p.message} />)

    return (
        <div className={s.postsBlock}>

            <h3>My posts</h3>
            <div>
                <div className="">
                    <textarea></textarea>
                </div>
                <div className="">
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElments}
            </div>


        </div>
    )
}

export default MyPosts;
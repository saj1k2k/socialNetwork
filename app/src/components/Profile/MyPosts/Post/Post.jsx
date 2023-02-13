import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/5e/ad/ae/5eadae9bc9179a04cd303e6f47716857.png" alt='dasd' />
            {props.message}
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;
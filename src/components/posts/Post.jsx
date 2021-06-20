import React from 'react';
import './Post.css';
import PostComponent from '../post/post';
const Post = ({posts}) => {
    return (
        <div className="Post">
            {posts.map(p=> (
                
                <PostComponent key={p._id} post={p}/>
            ))}
        </div>
    );
}

export default Post;

import React from 'react';
import './post.css';
import {Link} from 'react-router-dom'
const post = ({post}) => {
    const pic = "https://myquang-blog.glitch.me/images/"
    return (
        <div className="post">
            {post.photo ? 
                <img className="post__img" src={pic+ post.photo} alt="" srcSet="" />
                :
                <img className="post__img" src="https://picsum.photos/900/400" alt="" srcSet="" />
                
            }
            <div className="post__Info">
                <div className="post__Cats">
                    {post.categories}
                </div>
                <Link className="post__Title" to={`/post/${post._id}`}>
                <span>
                    {post.title}
                </span>
                </Link>
                <hr/>
                <span className="post__date">
                    {new Date(post.createdAt).toDateString()}
                </span>
                <p className="post__desc">{post.desc}</p>
            </div>
        </div>
    );
}

export default post;

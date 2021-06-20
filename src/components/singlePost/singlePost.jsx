import React, { useContext, useEffect, useState } from 'react';
import './singlePost.css';
import {Link, useLocation} from 'react-router-dom';
import { Context } from '../../context/context';
import axios from 'axios';

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post,setPost] = useState({});
    const [updateMode,setUpdateMode] = useState(false);
    const {user} = useContext(Context);
    const pic = "https://myquang-blog.glitch.me/images/";
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const handleDelete= async ()=> {
        try {
            await axios.delete(`/posts/${post._id}`,{data: {
                username: user.username}});
            window.location.replace("/");
        } catch (e) {
            
        }
        
    }
    useEffect(() =>{
        const getPost = async() => {
            const res = await axios.get("/posts/"+ path );
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    },[path])
    const handleUpdate= async ()=>{
        try {
            await axios.put(`/posts/${post._id}`,{
                username: user.username,
                title,
                desc
            });
            setUpdateMode(false)
            // window.location.reload();
            
        } catch (e) {
        }
    }
    return (
        <div className="singlePost">
            <div className="singlePost__Wrapper">
                {post.photo && 
                    <img className="singlePost__img" src={pic+post.photo} alt="" srcSet="" />
                }
                {updateMode ? <input className="singlePost__input" type="text" autoFocus value={title}
                onChange={(e)=> setTitle(e.target.value)}
                ></input> : (
            <h1 className="singlePost__title">
                {title}
                {post.username === user?.username &&
                    <div className="singlePost__edit">
                        <i className="singlePost__icon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                        <i className="singlePost__icon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                }
            </h1>
            )}
            <div className="singlePost__info">
                <span className="singlePost__author">Tác giả: 
                <Link to={`/?user=${post.username}`}>
                <b> {post.username}</b>
                </Link>
                </span>
                
                <span className="singlePost__date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updateMode ?  
                <textarea placeholder="Nhập vào nội dung....." type="text"
                className= "singlePost__input singlePost__text" defaultValue={post.desc} value={desc}
                onChange={(e)=> setDesc(e.target.value)}
                ></textarea> : (
                    <p className="singlePost__desc">
                        {desc}
                    </p>
                )}
            {updateMode && <button className="singlePost__button" onClick={handleUpdate}>Lưu chỉnh sửa</button>}
            
            </div>
        </div>
    );
}

export default SinglePost;

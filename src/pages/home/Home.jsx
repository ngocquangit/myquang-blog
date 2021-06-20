import React,{useState,useEffect} from 'react';
import HeaderComponent from '../../components/header/header'
import PostComponent from '../../components/posts/Post'
import SlidebarComponent from '../../components/slidebar/Slidebar'
import axios from 'axios'
import './Home.css'
import { useLocation } from 'react-router-dom';
const Home = () => {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPost = async()=>{
            const response = await axios.get("/posts"+ search)
            console.log(response);
            setPosts(response.data);
        }
        fetchPost();
    },[search])
    return (
        <>
        <HeaderComponent/>
        <div className="myHome">
            <PostComponent posts ={posts}/>
            <SlidebarComponent/>
        </div>
        </>
    );
}

export default Home;

import React,{useState,useEffect} from 'react';
import './Slidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Slidebar = () => {
    const [cat,setCat] = useState([]);
    useEffect(() =>{
        const getCategories = async() => {
            const res = await axios.get("/categories");
            setCat(res.data)
        }
        getCategories();
        window.scrollTo(0, 0)
    },[])
    return (
        <div className="Slidebar">
            <div className="Slidebar__item">
                <span className="Slidebar__title">Về tôi</span>
                <img className="Slidebar__img" src="https://picsum.photos/400/400" alt="" srcSet="" />
                <p className="Slidebar__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi odit dolor dolores amet fuga, soluta deleniti velit eum omnis quae culpa dolore quas animi </p>
            </div>
            <div className="Slidebar__item">
                <span className="Slidebar__title">Danh mục</span>
                <ul className="SlidebarList">
                    {cat.map((c)=>(
                        <Link to={`/?cat=${c.name}`}>
                        <li className="SlidebarList__item" key={c._id}>
                            {c.name}
                        </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="Slidebar__item">
                <span className="Slidebar__title">Theo dõi tôi</span>
                <div className="Slidebar__social">
                    <i className="SlidebarIcon fab fa-facebook-square"></i>
                    <i className="SlidebarIcon fab fa-twitter-square"></i>
                    <i className="SlidebarIcon fab fa-pinterest-square"></i>
                    <i className="SlidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>

        </div>
    );
}

export default Slidebar;

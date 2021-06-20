import axios from 'axios';
import React,{ useState,useContext } from 'react';
import { Context } from '../../context/context';
import './write.css'
const Write = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState("");
    const [categories,setCategories] = useState("News");
    const {user} = useContext(Context);
    
    const handleSubmit = async (e)=>{
        setCategories("News")
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            categories
        };
        if(file){
            const data = new FormData();
            const fileName  = Date.now()+file.name;
            data.append("name",fileName);
            data.append("file",file);
            newPost.photo = fileName;
            try {
                await axios.post("/upload",data)
            } catch (error) {
            }
        }
        try {
            const res = await axios.post("/posts",newPost);
            window.location.replace('/post/'+ res.data._id)
        }
        catch (error) {
        } 
    }
    return (
        <div className="write">
            {file &&
            <img className="write__img" 
            src={URL.createObjectURL(file)} alt="" srcSet="" />
            }
            
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeForm__group">
                    <label htmlFor="fileInput">
                        <i className="writeForm__icon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}} onChange={e=>setFile(e.target.files[0])}/>
                    <input type="text" placeholder="Tiêu đề" className="writeForm__input" autoFocus={true} 
                    onChange={e=> setTitle(e.target.value)}/>
                </div>
                <div className="writeForm__group">
                    <textarea placeholder="Nhập vào nội dung....." type="text"
                    className= "writeForm__input writeForm__text"
                    onChange={e=> setDesc(e.target.value)}></textarea>
                </div>
                <button className="writeForm__submit" type="submit"> Đăng bài</button>
            </form>
        </div>
    );
}

export default Write;

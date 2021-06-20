import React, { useContext, useState } from 'react';
import './Setting.css'
import Slidebar from '../../components/slidebar/Slidebar'
import { Context } from '../../context/context';
import axios from 'axios';
const Setting = () => {
    const {user,dispatch} = useContext(Context);
    const [file,setFile] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [repassword,setRepassword] = useState("");
    const [success,setSuccess] = useState(false);
    const PF = "https://myquang-blog.glitch.me/images/"
    const handleUpdate = async (e)=>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updateUser = {
            userId: user._id,
            username,
            email,
            password,
            repassword
        };
        if(file){
            const data = new FormData();
            const fileName  = Date.now()+file.name;
            data.append("name",fileName);
            data.append("file",file);
            updateUser.profilePic = fileName;
            try {
                await axios.post("/upload",data)

            } catch (error) {
            }
        }
        try {
           const res = await axios.put("/users/"+ user._id,updateUser);
           setSuccess(true);
           dispatch({type:"UPDATE_SUCCESS",payload: res.data});
        }
        catch (error) {
            dispatch({type:"UPDATE_FAILURE"})
        } 
    }
    return (
        <div className="setting">
            <div className="setting__wrapper">
                <div className="setting__Title">
                    <span className="setting__updateTitle">
                        Cập nhập tài khoản
                    </span>
                    <span className="setting__deleteTitle">
                        Xóa tài khoản
                    </span>
                </div>
                <form action="" className="setting__form" onSubmit={handleUpdate}>
                    <label> Ảnh đại diện</label>
                    <div className="setting__pp">
                            <img
                            src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                            alt="" srcSet="" />
                        
                        <label htmlFor="fileInput">
                            <i className="setting__icon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:'none'}} onChange={e=>setFile(e.target.files[0])}/>
                    </div>
                    <label> Tài khoản</label>
                    <input type="text" name="" id="" placeholder={user.username}
                    onChange={e=> setUsername(e.target.value)}/>
                    <label> Email</label>
                    <input type="text" name="" id="" placeholder={user.email}
                    onChange={e=> setEmail(e.target.value)}/>
                    <label> Mật khẩu</label>
                    <input type="password" name="" id="" 
                    onChange={e=> setPassword(e.target.value)}/>
                    <label> Nhập lại mật khẩu</label>
                    <input type="password" name="" id="" 
                    onChange={e=> setRepassword(e.target.value)}/>
                    <button className="setting__submit" type="submit">Cập nhập</button>
                    {success && <span style= {{color:"green"}}> Cập nhập thông tin tài khoản thành công</span>}
                </form>
            </div>
            <Slidebar/>
        </div>
    );
}

export default Setting;

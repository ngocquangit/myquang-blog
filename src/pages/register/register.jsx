import React from 'react';
import "./register.css"
import {
  Link
} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
export default function Register() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [repassword,setRepassword] = useState("");
    const [err,setErr] = useState("");

    const handleSubmit = async e=>{
      setErr(false);
      e.preventDefault();
      try{
      const res  = await axios.post("/auth/register",{
        username,
        email,
        password,
        repassword
      })
      res.data && window.location.replace("/login")
      }
      catch(e){
        console.log(e);
        setErr(true);
      }
    }
    return (
        <div className="register">
      <span className="register__Title">Đăng ký</span>
      <form className="register__Form" onSubmit={handleSubmit}>
        <label>Tài khoản</label>
        <input className="register__Input" type="text" placeholder="Nhập vào tài khoản..." 
        onChange ={e => setUsername(e.target.value)}/>
        <label>Email</label>
        <input className="register__Input" type="text" placeholder="Nhập vào email..." 
        onChange ={e => setEmail(e.target.value)}/>
        <label>Mật khẩu</label>
        <input className="register__Input" type="password" placeholder="Nhập vào mật khẩu..." 
        onChange ={e => setPassword(e.target.value)}/>
        <label>Nhập lại mật khẩu</label>
        <input className="register__Input" type="password" placeholder="Nhập lại mật khẩu..." 
        onChange ={e => setRepassword(e.target.value)}/>
        <button className="register__Button" type="submit">Đăng ký</button>
      </form>
        <button className="register__LoginButton"><Link to="/login">Đăng nhập</Link></button>
        {err &&
        <span className="spanerr">Có lỗi khi đăng kí. Tài khoản hoặc mail đã tồn tại</span>
        }
    </div>
    )
}
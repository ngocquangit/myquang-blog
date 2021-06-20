import React, { useContext } from 'react';
import "./login.css";
import {
  Link
} from "react-router-dom";
import { useRef } from 'react';
import { Context } from '../../context/context';
import axios from 'axios';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch,isFetching} =useContext(Context)
  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({type:"LOGIN_SUCCESS",payload: res.data});
    } catch (error) {
      dispatch({type:"LOGIN_FAILURE"});
    }
  }
  return (
    <div className="login">
      <span className="login__Title">Đăng nhập</span>
      <form className="login__Form" onSubmit={handleSubmit}>
        <label>Tài khoản</label>
        <input className="login__Input" type="text" placeholder="Nhập vào tài khoản..." 
        ref={userRef}/>
        <label>Mật khẩu</label>
        <input className="login__Input" type="password" placeholder="Nhập vào mật khẩu..." 
        ref={passwordRef}/>
        <button className="login__Button" type="submit" disabled={isFetching}>Đăng nhập</button>
      </form>
        <button className="login__RegisterButton"><Link to="/register">Đăng ký</Link></button>
    </div>
  );
}
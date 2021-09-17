import React, { useState, useEffect } from 'react';
import MainPage from './MainPage';
import '../styles/login.css';


function Login() {
    const [meetingInfo, setMeetingInfo] = useState([]);
    const [admin, setAdmin] = useState(false);
    const [login, setLogin] = useState({
        username: '',
        password: ''
    });
    useEffect(() => {
        fetch('http://localhost:3000/login')
        .then(res => res.json())
        .then(data => setAdmin(data['admin']))
    })
    const handleSubmit = () => {
        const username = 'admin';
        const password = 'pass';
        if(login.username === username && login.password === password){
            fetch('http://localhost:3000/login', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"admin": true})
            })
        }
    }
    const logOut = () => {
        fetch('http://localhost:3000/login', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"admin": false})
        })
        .then(window.location.reload(true))
    }
    const handleChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    }
    return (
        <div className="main_container">
            <MainPage meetingInfo={meetingInfo} setMeetingInfo={setMeetingInfo} />
            {   
            admin === false 
                ? 
                <form className="login_contianer" onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={login.name} name="username" type="text" placeholder="enter username" />
                    <input onChange={handleChange} value={login.password} name="password" type="password" placeholder="enter password" />
                    <button type="submit">Login</button>
                </form> 
                :
                <button className="logout" onClick={logOut} type="button">Log Out</button>
            }
        </div>
    );
}

export default Login;

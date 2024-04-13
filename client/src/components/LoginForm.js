import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
 
const LoginForm = () => {

    const [username, setLocalUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const {setLoginStatus, setUsername} = useContext(UserContext);

    const login = () => {

        const userData = {
            username: username,
            password: password
        }

        let ok;

        fetch(`http://18.225.235.13:5000/auth`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then((res) => {
            ok = res.ok
            return res.json()
        }).then((data) => {
            if(!ok) {
                alert(data.message);
            } else {
                alert(data.message);
                setLoginStatus(true);
                setUsername(username);
                navigate("/");
            }
        })



    }

    return (
        <div className="float-left bg-blue-200 w-full flex justify-center">
            <div className="shadow-2xl rounded-lg bg-blue-300 w-1/3 my-24 p-8 mx-8">
                <div className="mx-12 mt-12 mb-12 text-3xl font-sans flex justify-center">Sign in to MeTube</div>
                <div className="m-4 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[80%] px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="Enter your username" type="text" required onChange={e => setLocalUsername(e.target.value)}/>
                </div>
                <div className="m-4 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[80%] px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="Enter your password" type="password" required onChange={e => setPassword(e.target.value)}/>
                </div>
                
                
                <div className="mx-12 mt-12 mb-8 font-sans flex justify-center">
                    <button className="rounded-full bg-blue-400 flex font-sans px-10 py-3 justify-center hover:bg-blue-500" type="submit" onClick={login}>Log in</button>
                </div>
                
            </div>  
        </div>
    );
};
 
export default LoginForm;
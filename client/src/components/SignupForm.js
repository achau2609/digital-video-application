import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 
const SignupForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPw, setConfirmPw] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {

        let validation = { validate: true, msg: ''};
        if(firstName === '' || lastName === '' || email === '' || username === '' || password === '' || confirmPw === '' ) {
            validation.validate = false
            validation.msg = 'Missing information!'
        }
        if(confirmPw !== password) {
            validation.validate = false
            validation.msg = 'Passwords do not match!'
        }
        return validation;
    }

    const signup = () => {
        const validation = validateForm();
        if (validation.validate) {
            const userData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                username: username,
                password: password
            }

            let ok;

            fetch(`http://18.225.235.13:5000/users`, {
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
                    alert(data.message)
                } else {
                    alert(data.message)
                    navigate('/login') 
                }
            })
        } else {
            alert(validation.msg)
        }

    }

    return (
        <div className="float-left bg-blue-200 w-full flex justify-center">
            <div className="shadow-2xl rounded-lg bg-blue-300 w-1/3 my-24 p-8 mx-8">
                <div className="mx-12 mt-12 mb-12 text-3xl font-sans flex justify-center">Create a new account</div>

                <div className="m-4 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[39.25%] mx-1 px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="First Name" type="text" required onChange={e => setFirstName(e.target.value)}/>
                    <input className="rounded-md h-10 w-[39.25%] mx-1 px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="Last Name" type="text" required onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className="m-4 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[80%] px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="Enter your email" type="text" required onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="m-4 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[80%] px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="Enter your username" type="text" required onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className="m-4 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[80%] px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="Enter your password" type="password" required onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="mx-4 mt-4 mb-8 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[80%] px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="Confirm password" type="password" required onChange={e => setConfirmPw(e.target.value)}/>
                </div>

                <div className="mx-12 mt-8 mb-8 font-sans flex justify-center">
                    <button className="rounded-full bg-blue-400 px-10 py-3 justify-center hover:bg-blue-500" onClick={signup}>Sign up</button>
                </div>
                
            </div>  
        </div>
    );
};
 
export default SignupForm;
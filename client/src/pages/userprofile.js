import React, { useContext, useEffect, useState } from "react"
import UserContext from "../context/UserContext"

const UserProfile = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [localUsername, setLocalUserName] = useState('');

    const {username} = useContext(UserContext);

    useEffect(() => {

        fetch(`http://18.225.235.13:5000/user?username=${username}`, {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((data) =>{
            setFirstName(data.body[0].firstName);
            setLastName(data.body[0].lastName)
            setEmail(data.body[0].email);
            setLocalUserName(data.body[0].username)
        })

    }, [])

    return (
        <div className="float-left bg-blue-200 w-full flex justify-center">
            <div className="shadow-2xl rounded-lg bg-blue-300 w-1/3 my-24 p-8 mx-8">
                <div className="mx-12 mt-12 mb-12 text-3xl font-sans flex justify-center">My Account</div>

                <div className="m-4 my-6 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[39.25%] mx-1 px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" defaultValue={firstName} type="text"/>
                    <input className="rounded-md h-10 w-[39.25%] mx-1 px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" defaultValue={lastName} type="text"/>
                </div>
                <div className="m-4 my-6 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[80%] px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" defaultValue={email} type="text"/>
                </div>
                <div className="m-4 mt-6 mb-24 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[80%] px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" defaultValue={localUsername} type="text" />
                </div>
                
            </div>  
        </div>
    )

}

export default UserProfile
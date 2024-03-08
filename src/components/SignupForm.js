import React from "react";
 
const SignupForm = () => {
    return (
        <div className="float-left bg-blue-200 w-full flex justify-center">
            <div className="shadow-2xl rounded-lg bg-blue-300 w-1/3 my-24 p-8 mx-8">
                <div className="mx-12 mt-12 mb-12 text-3xl font-sans flex justify-center">Create a new account</div>

                <div className="m-4 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[39.25%] mx-1 px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="First Name" type="text" />
                    <input className="rounded-md h-10 w-[39.25%] mx-1 px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="Last Name" type="text" />
                </div>
                <div className="m-4 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[80%] px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="Enter your email" type="text" />
                </div>
                <div className="mx-4 mt-4 mb-8 font-sans flex justify-center">
                    <input className="rounded-md h-10 w-[80%] px-4 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="Enter your password" type="text" />
                </div>
                
                <div className="flex justify-center">
                    <input id="tos-checkbox" type="checkbox" value="" className="rounded w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-3" />
                    <label for="tos-checkbox" className="ms-2 text-sm font-medium">I certify that I am at least 18 years old and that I agree to the<br />Terms of Service and Privacy Policy.</label>
                </div>
                    
                
                <div className="mx-12 mt-8 mb-8 font-sans flex justify-center">
                    <button className="rounded-full bg-blue-400 px-10 py-3 justify-center hover:bg-blue-500">Sign up</button>
                </div>
                
            </div>  
        </div>
    );
};
 
export default SignupForm;
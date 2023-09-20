import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react"; // Import useState
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const ForgotPassword = () => { // Correct the component name (typo "Forgortpassword" to "ForgotPassword")
    const history = useNavigate();
    const [email, setEmail] = useState(""); // Use state to store the email input value

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Check your email for a password reset link.");
            history("/");
        } catch (err) {
            alert(err.code);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-[500px] mx-auto my-20 py-10 shadow-[0px_0px_40px_rgba(0,0,0,0.4)] rounded-xl flex flex-col gap-4">
            <h1 className="text-center text-xl pb-5 font-semibold">Forgot Password</h1>
            <h1 className="px-28 text-sm text-gray-500">
                Enter the email address associated with your account, and we'll send you a link to reset your password.
            </h1>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="px-28 text-lg">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="border-2 pl-2 pr-28 rounded-xl py-2 mx-auto flex"
                    value={email} // Bind the input value to the email state
                    onChange={(e) => setEmail(e.target.value)} // Handle input changes
                />
                <p className="flex mx-auto py-5 gap-1">
                    Don't have an account? <Link to="/signup" className="font-bold underline">Sign up</Link>
                </p>
            </div>
            <button className="border-2 mx-auto px-7 text-white bg-[#3B5D50] font-semibold rounded-3xl py-2" type="submit">
                Continue
            </button>
        </form>
    );
};

export default ForgotPassword; // Correct the export name (typo "Forgortpassword" to "ForgotPassword")

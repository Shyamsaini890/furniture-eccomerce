import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import googleicon from "../images/google-icon.png";
import github from "../images/github-icons.png";
import fb from "../images/fb-icons.png";

const Signup = () => {
  const [signinwithgoogle, setSigninwithgoogle] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setSigninwithgoogle(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/");
    })
    .catch((err)=>{
      console.log(err)
    });
  };
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errormsg, setErrormsg] = useState("");
  const [submitbuttondisable, setsubmitbuttondisable] = useState(false);
  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrormsg("Please fill all fields");
      return;
    }
    setErrormsg("");
    setsubmitbuttondisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setsubmitbuttondisable(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        signOut(auth).then(
          function () {
            console.log("Signed Out");
          },
          function (error) {
            console.error("Sign Out Error", error);
          }
        );
        navigate("/login");
      })
      .catch((err) => {
        setsubmitbuttondisable(false);
        setErrormsg(err.message);
      });
  };
  return (
    <>
      <div className=" w-[500px] mx-auto mt-5 mb-20  shadow-[0px_0px_40px_rgba(0,0,0,0.4)] rounded-xl  ">
        <h1 className=" text-3xl font-semibold text-center py-4 ">SIGN-UP</h1>
        <div>
          <div className=" flex flex-col  gap-2 py-3">
            <label htmlFor="email" className=" text-lg pl-28">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
              className=" border mx-auto pl-3 pr-28 py-2 rounded-lg"
            />
          </div>
          <div className=" flex flex-col  gap-2 py-3">
            <label htmlFor="email" className=" text-lg pl-28">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your E-mail"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
              className=" border mx-auto pl-3 pr-28 py-2 rounded-lg"
            />
          </div>
          <div className=" flex flex-col  gap-2">
            <label htmlFor="password" className=" text-lg pl-28">
              Passowrd
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
              className=" border mx-auto pl-3 pr-28 py-2 rounded-lg"
            />
            <p className=" pl-28 ">
              Already have an Account{" "}
              <Link to="/login" className=" font-bold underline">
                Login
              </Link>
            </p>
          </div>
          <div className=" flex flex-col">
            <b className=" pl-28 pt-2 text-red-600">{errormsg}</b>
            <button
              onClick={handleSubmission}
              type="submit"
              disabled={submitbuttondisable}
              className=" flex mx-auto  mt-10 disabled:!bg-gray-500 text-lg border  rounded-3xl px-8 py-2  bg-[#3B5D50] text-white font-semibold"
            >
              Sign-up
            </button>
            <p className=" text-center my-4">OR</p>
          </div>
          <div className=" flex  items-center justify-center pb-10 gap-10">
            <button onClick={handleClick}>
              <img src={googleicon} alt="" className=" w-[50px]" />
            </button>
            <button>
              <img src={fb} alt="" className=" w-[45px]" />
            </button>
            <button>
              <img src={github} alt="" className=" w-[45px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase/firebase";
import googleicon from "../images/google-icon.png";
import github from "../images/github-icons.png";
import fb from "../images/fb-icons.png";

const Login = () => {
  const [signinwithgoogle, setSigninwithgoogle] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setSigninwithgoogle(data.user.email);
        localStorage.setItem("email", data.user.email);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errormsg, setErrormsg] = useState("");
  const [submitbuttondisable, setsubmitbuttondisable] = useState(false);
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrormsg("Please fill all fields");
      return;
    }
    setErrormsg("");
    setsubmitbuttondisable(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setsubmitbuttondisable(false);

        navigate("/");
      })
      .catch((err) => {
        setsubmitbuttondisable(false);
        setErrormsg(err.message);
      });
  };
  useEffect(() => {
    setSigninwithgoogle(localStorage.getItem("email"));
  });
  return (
    <>
      <div className=" w-[500px] mx-auto my-20  shadow-[0px_0px_40px_rgba(0,0,0,0.4)] rounded-xl  ">
        <h1 className=" text-3xl font-semibold text-center py-4 ">LOGIN.</h1>
        <div>
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
            <Link to="/forgotpassword" className="pl-28 text-blue-500 ">
              Forgot password
            </Link>
            <p className=" pl-28 ">
              Don't have an Account?{" "}
              <Link to="/signup" className=" font-bold  underline">
                Signup
              </Link>
            </p>
          </div>
          <div className=" flex flex-col">
            <b className=" pl-28 pt-2 text-red-600">{errormsg}</b>
            <button
              onClick={handleSubmission}
              disabled={submitbuttondisable}
              type="submit"
              className=" flex mx-auto mt-10 text-lg border  rounded-3xl px-8 py-2  bg-[#3B5D50] text-white font-semibold"
            >
              Login
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

export default Login;

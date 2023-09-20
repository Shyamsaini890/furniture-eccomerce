import React, { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeAllItems } from "../Redux/CartSlice";
import { CiLogout, CiUser } from "react-icons/ci";
const Navbar = ({ userName }) => {
  const cartListLength = useSelector((state) => state.cart).length;
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(removeAllItems());
      setShowMenu(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" flex justify-around items-center bg-[#3B5D50] text-white py-8">
      <h1 className=" text-3xl font-semibold">Furni.</h1>

      <div className=" flex gap-3 text-xl">
        <Link to="/" className=" relative group ">
          Home
          <span class="absolute inset-x-0 bottom-0 h-1  duration-700 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Link>

        <Link href="#" class="relative   group">
          About us
          <span class="absolute inset-x-0 duration-1000 bottom-0 h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Link>

        <Link
          to="/Product"
          className=" relative group
        "
        >
          Product
          <span class="absolute inset-x-0 bottom-0 duration-700 h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Link>
        <Link
          to="/Contact"
          className=" relative group
        "
        >
          Contact us
          <span class="absolute inset-x-0 bottom-0 duration-700 h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Link>
      </div>
      <div className=" flex gap-3">
        {userName ? (
          <div
            className=" relative"
            onMouseEnter={(e) => {
              !showMenu && setShowMenu(true);
            }}
            onMouseLeave={() => {
              showMenu && setShowMenu(false);
            }}
          >
            <div className=" flex items-center gap-2 cursor-pointer">
              <CiUser size={22} />
              <p className=" text-lg font-semibold hidden sm:flex">
                {userName}
              </p>
            </div>
            {showMenu && (
              <div className=" text-black  cursor-pointer absolute top-5 py-1 bg-transparent min-w-[100px] w-full ">
                <div
                  onClick={logout}
                  className="shadow-xl bg-gray-100 my-1 py-2 px-5 w-full rounded-md  gap-2 flex justify-center items-center"
                >
                  <CiLogout />
                  Log Out
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className={" text-xl "}>
              <Link to="/login">Login</Link>
            </button>
            <button className={" text-xl "}>
              <Link to="/signup">Signup</Link>
            </button>
          </>
        )}
        {/* <BiUser className=" text-3xl" name={userName} /> */}
        <Link to="/cart" className=" relative">
          {cartListLength > 0 && (
            <span className="hidden sm:flex absolute -top-3 -right-3 px-1 font-bold text-sm bg-transparent rounded-full text-white">
              {cartListLength}
            </span>
          )}
          <AiOutlineShoppingCart className=" text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

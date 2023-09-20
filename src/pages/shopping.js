import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

const Shopping = () => {
  const dispatch=useDispatch()
  const addtocart = (item) => {
    dispatch(addToCart(item));
  };
  const id = useParams().id;
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);
  return (
    <>
      {item.title ? (
        <div className=" flex shadow-md my-3 gap-20 justify-center">
          <div id="first" className=" flex  flex-col gap-3 py-5  ">
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                height: "300px",
                width: "300px",
                backgroundSize: "cover",
              }}
            ></div>
            <button onClick={() => addtocart(item)} className=" font-semibold px-10 py-2 text-center flex mx-auto border rounded-xl bg-[#3B5D50] text-white">
              ADD TO CART
            </button>
          </div>
          <div className=" flex flex-col gap-4 my-10">
            <h1 className=" text-xl font-semibold">{item.title}</h1>
            <div className=" text-gray-500 font-semibold flex items-center gap-2">
              <div className=" px-2 text-sm bg-green-600 text-white rounded-md flex items-center gap-1">
                4.5 <IoMdStar />
              </div>
              1,08,426 Ratings & 7,548 Reviews
            </div>
            <div className=" flex items-center gap-2">
              <h1 className=" text-3xl font-semibold ">$ {item.price} </h1>
              <p>
                <span className=" line-through text-gray-500">$ 13.30</span>
                <span className=" text-green-600">13% off</span>
              </p>
            </div>
            <h1 className=" text-lg font-semibold">Available Offers</h1>
            <p>
              <li>
                <span className=" font-semibold">Bank Offer</span> 10% off on
                IDFC FIRST Bank Credit Card EMI Txns, up to ₹1,500 on orders of
                ₹7,500 and above{" "}
                <span className=" text-blue-700 font-semibold">T&C</span>
              </li>
              <li>
                <span className=" font-semibold">Bank Offer</span> Extra ₹3,000
                off on IDFC FIRST Bank Credit Card EMI Txns on Net Cart Value of
                ₹50,000 and above{" "}
                <span className=" text-blue-700 font-semibold">T&C</span>
              </li>
              <li>
                <span className=" font-semibold">Bank Offer</span> Flat ₹1,250
                off on OneCard Credit Card EMI Transactions on orders of ₹12,500
                and above{" "}
                <span className=" text-blue-700 font-semibold">T&C</span>
              </li>
              <li>
                <span className=" font-semibold">Special Price</span> Get extra
                ₹2758 off (price inclusive of cashback/coupon){" "}
                <span className=" text-blue-700 font-semibold">T&C</span>
              </li>
            </p>
            {/* <p className="w-[70%]">{item.description}</p> */}
          </div>
        </div>
      ) : (
        
<div role="status" className=" my-20 mx-20 flex justify-center items-center space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
    <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-200">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>
    <div class="w-full">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-200 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-200 max-w-[480px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-200 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-200 max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-200 max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-200 max-w-[360px]"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>

      )}
    </>
  );
};

export default Shopping;

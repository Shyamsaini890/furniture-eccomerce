import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdStar } from "react-icons/io";

const Product = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductData(json));
  }, []);
  return (
    <>
      {productData.length > 0 ? (
        productData.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className=" flex shadow-md my-3 justify-around hover:scale-105 transition-all duration-300"
          >
            <div
              id="first"
              className="flex gap-20 py-5  w-[60%] "
              key={product.id}
            >
              <div
                style={{
                  backgroundImage: `url(${product.image})`,
                  height: "300px",
                  width: "300px",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className=" w-[50%] py-5 flex  flex-col gap-4 ">
                <h1 className=" text-xl font-semibold">{product.title}</h1>
                <div className=" text-gray-500 font-semibold flex items-center gap-2">
              <div className=" px-2 text-sm bg-green-600 text-white rounded-md flex items-center gap-1">
                4.5 <IoMdStar />
              </div>
              1,08,426 Ratings & 7,548 Reviews
            </div>
                <p>{product.description}</p>
              </div>
            </div>
            <div id="sec" className=" w-[10%] py-10 flex flex-col gap-1">
              <h1 className=" text-3xl font-semibold pt-2">
                $ {product.price}
              </h1>
              <p>
                <span className=" line-through text-gray-500">$ 13.30</span>{" "}
                <span className=" text-green-600">13% off</span>
              </p>
              <p>Free Delivery</p>
              <p className=" text-green-600">Daily Saver</p>
              <p className=" text-xl text-green-600 font-semibold">
                Bank Offer
              </p>
            </div>
          </Link>
        ))
      ) : ( <div>
        <div
          role="status"
          className=" my-20 mx-20 flex justify-center items-center space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
        >
          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-200">
            <svg
              class="w-10 h-10 text-gray-200 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
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


        </div>
        
      )}
    </>
  );
};

export default Product;

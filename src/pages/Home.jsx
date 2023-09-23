import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductData();
  }, []);
  async function sortFunction() {
    setLoading(true);
    try {
      setPosts([
        ...posts.sort((a, b) => {
          return a.price - b.price;
        }),
      ]);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }
  async function sortFunction1() {
    setLoading(true);
    try {
      setPosts([
        ...posts.sort((a, b) => {
          return b.price - a.price;
        }),
      ]);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }
  async function ratingFunction1() {
    setLoading(true);
    try {
      setPosts([
        ...posts.sort((a, b) => {
          return b.rating.rate - a.rating.rate;
        }),
      ]);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }
  async function ratingFunction() {
    setLoading(true);
    try {
      setPosts([
        ...posts.sort((a, b) => {
          return a.rating.rate - b.rating.rate;
        }),
      ]);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }
  function sortProductPrice(e) {
    e.stopPropagation();
    if (e.target.value === "LowToHigh") {
      sortFunction();
    }
    if (e.target.value === "HighToLow") {
      sortFunction1();
    }
  }
  async function electronics() {
    setLoading(true);
    const res = await fetch(API_URL);
    const data = await res.json();
    try {
      setPosts([
        ...data.filter((a) => {
          return a.category === "electronics";
        }),
      ]);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }
  async function menswear() {
    setLoading(true);
    const res = await fetch(API_URL);
    const data = await res.json();
    try {
      setPosts([
        ...data.filter((a) => {
          return a.category === "men's clothing";
        }),
      ]);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }
  async function womenWear() {
    setLoading(true);
    const res = await fetch(API_URL);
    const data = await res.json();
    try {
      setPosts([
        ...data.filter((a) => {
          return a.category === "women's clothing";
        }),
      ]);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }
  async function jewelery() {
    setLoading(true);
    const res = await fetch(API_URL);
    const data = await res.json();
    try {
      setPosts([
        ...data.filter((a) => {
          return a.category === "jewelery";
        }),
      ]);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }
  function categoryWiseProduct(e) {
    e.stopPropagation();
    if (e.target.value === "electronics") {
      electronics();
    }
    if (e.target.value === "mens") {
      menswear();
    }
    if (e.target.value === "women") {
      womenWear();
    }
    if (e.target.value === "jewelery") {
      jewelery();
    }
  }
  function ratingProduct(e) {
    e.stopPropagation();
    if (e.target.value === "Low") {
      ratingFunction();
    }
    if (e.target.value === "High") {
      ratingFunction1();
    }
    if (e.target.value === "clear") {
      fetchProductData();
    }
  }
  return (
    <div>
      <div>
        {loading ? (
          <Spinner></Spinner>
        ) : posts.length > 0 ? (
          <div className=" mt-2">
            <div className="flex flex-col gap-x-3  items-end justify-end mx-16 m-auto sm:flex-row">
              <select
                onChange={(e) => categoryWiseProduct(e)}
                className="text-gray-700 border-2 w-32 border=gray-700 rounded-full hover:text-white font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700   transition duration-300 ease-in "
              >
                <option>Category</option>
                <option value="mens">men</option>
                <option value="women">women</option>
                <option value="electronics">electronics</option>
                <option value="jewelery">jewelery</option>
              </select>
              {/* <div onClick={sortFunctionC} className="cursor-pointer">
                SortCategory
              </div> */}
              <select
                onChange={(e) => sortProductPrice(e)}
                className="text-gray-700 border-2 w-32 border=gray-700 rounded-full hover:text-white font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700   transition duration-300 ease-in "
              >
                <option>Price</option>
                <option value="LowToHigh">Low to High</option>
                <option value="HighToLow">High to Low</option>
              </select>
              <select
                onChange={(e) => ratingProduct(e)}
                className="text-gray-700 border-2 w-32 border=gray-700 rounded-full hover:text-white font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700   transition duration-300 ease-in "
              >
                <option>Rating</option>
                <option value="Low">Low to High</option>
                <option value="High">High to Low</option>
                <option value="clear">Clear Filter</option>
              </select>
            </div>
            <div className=" grid  sm:grid-cols-2  xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-1 min-h-[80vh]">
              {posts.map((post) => (
                <Product key={post.id} post={post}></Product>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center ">
            <p>No Data found </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;

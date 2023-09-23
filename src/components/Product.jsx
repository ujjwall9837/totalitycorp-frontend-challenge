import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slice/CartSlice";

export const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("removed");
  };
  return (
    <div className="flex gap-3 p-4 mt-1 rounded-xl ml-5 flex-col items-center shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] justify-between hover:scale-90  transition duration-300 ease-in hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left  truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + " ..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full"></img>
      </div>
      <div className="flex justify-between items-center gap-12">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        {cart.some((p) => p.id == post.id) ? (
          <button
            className="text-gray-700 border-2 border=gray-700 rounded-full hover:text-white font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700   transition duration-300 ease-in "
            onClick={removeFromCart}
          >
            Remove Items
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border=gray-700 rounded-full hover:text-white font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700   transition duration-300 ease-in "
            onClick={addToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
export default Product;

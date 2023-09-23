import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { add, deleteCartItem, remove } from "../redux/Slice/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const deleteFromCart = () => {
    dispatch(deleteCartItem(item.id));
  };
  const removeFromCart = () => {
    dispatch(remove(item));
    toast.success("Item Removed");
  };
  const addInCart = () => {
    dispatch(add(item));
    toast.success("Item Repeated");
  };

  return (
    <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover " src={item.image} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">
            {item.description}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div className="flex flex-col items-center gap-x-1 sm:flex-row overflow-hidden">
              <div
                onClick={addInCart}
                className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              >
                +
              </div>
              <div
                className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                onClick={deleteFromCart}
              >
                <AiFillDelete />
              </div>
              <div
                onClick={removeFromCart}
                className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              >
                -
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

// import { createSlice } from "@reduxjs/toolkit";

// export const CartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     // add: () => {},
//     // remove: () => {},
//     add: (state, action) => {
//       state.push(action.payload);
//     },
//     remove: (state, action) => {
//       return state.filter((item) => item.id !== action.payload );
//     },
//   },
// });

// export const { add, remove } = CartSlice.actions;
// export default CartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    deleteCartItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    remove: (state, action) => {
      // return state.filter((item) => item.id !== action.payload);
      state.pop(action.payload);
    },
  },
});

export const { add, deleteCartItem, remove } = CartSlice.actions;
export default CartSlice.reducer;

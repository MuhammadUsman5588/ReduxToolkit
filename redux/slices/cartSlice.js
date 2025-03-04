import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], totalAmount: 0 },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      const priceValue = parseFloat(action.payload.price.replace("$", ""));

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += priceValue;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          totalPrice: priceValue,
        });
      }
      state.totalAmount += priceValue;
    },

    removeOneFromCart: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.totalPrice -= parseFloat(item.price.replace("$", ""));
        } else {
          state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
        }
        state.totalAmount = Math.max(0, state.totalAmount - parseFloat(item.price.replace("$", "")));
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeOneFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;





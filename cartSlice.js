import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const exist = state.items.find((item) => item.id === plant.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalAmount += plant.price;
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const plant = state.items.find((item) => item.id === id);
      if (plant) {
        plant.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += plant.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const plant = state.items.find((item) => item.id === id);
      if (plant && plant.quantity > 1) {
        plant.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= plant.price;
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const plant = state.items.find((item) => item.id === id);
      if (plant) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity -= plant.quantity;
        state.totalAmount -= plant.price * plant.quantity;
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;

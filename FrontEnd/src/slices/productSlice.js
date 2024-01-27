import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.products.push(action.payload)
    },
    removeProducts: (state, action) => {
      return {
        ...state,
        products: state.products.filter((item) => item.codigo !== action.payload)
      }
    }
  },
})

export const filterProductAsync = async (query) => {
  const { data } = await axios.get(`http://127.0.0.1:8000/api/v1/products/filter/${query}`);
  return data;
};
export const { addProducts, removeProducts } = productSlice.actions;
export default productSlice.reducer;
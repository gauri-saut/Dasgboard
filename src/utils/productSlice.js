import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
  error: null,
  chartData: {
    categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    series: [{
      name: 'Orders',
      data: [130, 79, 65, 85, 42, 67, 0] // Update with provided data
    }],
  },
};

// Mock API call, replace with actual API call if needed
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("https://668a20dc2c68eaf3211c01c0.mockapi.io/order/order");
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Assuming the API response matches the format needed for chartData
        state.chartData.series[0].data = Object.values(action.payload[0].orders); // Update series data
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [
      { orderName: 'Sweet', customerName: 'Ajit Kumar', price: '250/-', status: 'Pending' },
      { orderName: 'Paneer Cheese', customerName: 'Gauri Saut', price: '350/-', status: 'Delivered' },
      { orderName: 'Sezeler', customerName: 'Park Sing', price: '2500/-', status: 'Pending' }
    ]
  },
  reducers: {
    addOrder: (state, action) => {
      state.items.push(action.payload);
    },
    updateStatus: (state, action) => {
      const { index } = action.payload;
      state.items[index].status = state.items[index].status === 'Pending' ? 'Delivered' : 'Pending';
    },
  }
});

export const { addOrder, updateStatus } = orderSlice.actions;
export default orderSlice.reducer;

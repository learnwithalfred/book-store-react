import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    name: 'Sports',
  },
  {
    id: '456789',
    name: 'Entertainment',
  },
  {
    id: '4569876789',
    name: 'Education',
  },
  {
    id: '4589',
    name: 'Politics',
  },
];

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoryAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { categoryAdded } = categorySlice.actions;
export const selectAllCategories = (state) => state.categories;

export default categorySlice.reducer;

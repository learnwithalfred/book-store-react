import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Under construction'],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

// export const selectAllCategories = (state) => state.categories.categories;

export default categorySlice.reducer;

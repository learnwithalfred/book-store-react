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
];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const selectAllCategories = (state) => state.categories;

export default categoryReducer;

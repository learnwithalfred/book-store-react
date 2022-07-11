const initialState = {
  categories: [
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
      id: 'kads8798',
      name: 'Music',
    },
  ],
  cur_status: 'Under Construction',
};

export const checkStatus = () => ({
  type: 'CHECK_STATUS',
});

export const getCategories = () => ({
  type: 'GET_CATEGORIES',
});

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return {
        ...state,
        cur_status: state.cur_status,
      };
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: state.categories,
      };

    default:
      return state;
  }
};

export const selectAllCategories = (state) => state.categories.categories;
export const getStatus = (state) => state.categories.cur_status;

export default categoryReducer;

const CHECK_STATUS = 'CHECK_STATUS';

export const CheckStatus = () => ({
  type: CHECK_STATUS,
});

const initialStatus = {
  categories: ['Under construction'],
};

const categoryReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return initialStatus;
    default:
      return state;
  }
};

export default categoryReducer;

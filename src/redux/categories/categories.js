const CHECK = 'CHECK';

export const CheckStatus = () => ({
  type: CHECK,
});

const initialStatus = {
  categories: ['Under construction'],
};

const categoryReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case CHECK:
      return initialStatus;
    default:
      return state;
  }
};

export default categoryReducer;

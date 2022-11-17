const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = initialState, action) => {
  if (action.type === CHECK_STATUS) {
    return 'Under construction';
  }
  return state;
};

export default categoriesReducer;

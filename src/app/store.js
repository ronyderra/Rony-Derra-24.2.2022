import { configureStore } from '@reduxjs/toolkit';
import  FavoriteReducer  from './index.js';

  const store = configureStore({
  reducer: {
    favorites: FavoriteReducer
  },
});

export default store;


// import { createStore, applyMiddleware } from "redux";
// import reducers from "./reducers"

// export const store = createStore(
//     reducers,
//     {},
// )
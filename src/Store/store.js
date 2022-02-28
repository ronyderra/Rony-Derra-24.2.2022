import { configureStore } from '@reduxjs/toolkit';
import  FavoriteReducer  from './index.js';

  const store = configureStore({
  reducer: {
    favorites: FavoriteReducer
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import  FavoriteReducer  from './favoritesSlice';


export const store = configureStore({
  reducer: {
    favorites: FavoriteReducer
  },
});

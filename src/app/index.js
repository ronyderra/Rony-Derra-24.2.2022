import { createSlice } from '@reduxjs/toolkit'
const initialState = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.push(action.payload)
            console.log(action.payload)
        }
    }
})

export const { addFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer

export const selectFavorites = (state) => state.favorites.value;

// export * from "./store"
// export * as actionCreators from "./action-creator/actions"
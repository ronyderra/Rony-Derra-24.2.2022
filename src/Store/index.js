import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite(state, action) {
            state.push(action.payload)
        },
    }
})

// const keyState = 0;
// export const keySlice = createSlice({
//     name: 'key',
//     keyState,
//     reducers: {
//         changeKey(state, action) {
//             return state.value - state.value + action.payload
//         },
//     }
// })

export const { addFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
export const selectFavorites = (state) => state.favorites.value;


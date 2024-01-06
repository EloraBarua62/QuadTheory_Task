import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk("cards/fetchCards" , async() => {
    const url = "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10";

    fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        return res;
    })
});



const initialCards = {
    isLoading: false,
    cards: [],
    error: null,
};


export const cardSlice = createSlice({
    name: "cards",
    initialState: initialCards,
    extraReducers: (builder) => {

        builder.addCase(fetchCards.pending , (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchCards.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cards = action.payload;
            state.error = null;
        });

        builder.addCase(fetchCards.rejected , (state, action) => {
            state.isLoading = false;
            state.cards = [];
            state.error = action.error.message;
        })
    }
})

export default cardSlice.reducer;
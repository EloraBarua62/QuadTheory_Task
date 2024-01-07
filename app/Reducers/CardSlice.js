import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk("cards/fetchCards" , async() => {
    const url = "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10";

    let data = await fetch(url)
    let response =  await data.json()
    return response.Items;
});



const initialCards = {
    isLoading: false,
    cards: [],
    error: null,
};


export const cardSlice = createSlice({
    name: "cards",
    initialState: initialCards,
    reducers:{
        additem: (state, action) => {
            console.log(action.payload);
            state.cards = [action.payload,...state.cards]
            console.log(state.cards);
        }
    },
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

export const {additem} = cardSlice.actions;

export default cardSlice.reducer;
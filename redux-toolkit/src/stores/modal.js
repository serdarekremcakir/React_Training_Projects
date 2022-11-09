import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
    name: 'modal',
    initialState: {
        name: false,
        data: false,
        open: false
    },
    reducers: {
        closeModal: (state,action) => {
            state.name = false;
            state.data = false;
            state.open = false;
        },
        openModal: (state,action) => {
            state.name = action.payload.name
            state.data = action.payload?.data || false
            state.open = true
        }
    }
})



export const {closeModal,openModal } = modal.actions;

export default modal.reducer;
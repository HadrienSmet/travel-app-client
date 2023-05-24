import { createSlice } from "@reduxjs/toolkit";

export const editingProfileSlice = createSlice({
    name: "editingProfile",
    initialState: {
        editingProfile: false,
    },
    reducers: {
        setEditingProfile: (state, { payload }) => {
            state.editingProfile = payload;
        },
    },
});

export const { setEditingProfile } = editingProfileSlice.actions;
export default editingProfileSlice.reducer;

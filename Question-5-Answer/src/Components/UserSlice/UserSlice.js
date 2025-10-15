import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    name: "Guest", isLoggedIn : false
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        LOGIN : (state) => {
            state.isLoggedIn = true;
        }
    }
})

export const {LOGIN} = UserSlice.actions;
export default UserSlice.reducer;
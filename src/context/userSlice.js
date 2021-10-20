import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null
}

const usurSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
        },
        setUserLogOutState: state => {
            state.userName = null
            state.userEmail = null
        }
    }
})

export const {setActiveUser, setUserLogOutState} = usurSlice.actions
export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail

export default usurSlice.reducer
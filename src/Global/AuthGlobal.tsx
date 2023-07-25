import { createSlice } from '@reduxjs/toolkit'

interface iDataI {
  _id?: string;
}

const initialState = {
  toggle: false,
  stepToggle: false,
  user: null || {} as iDataI,
  }

const AuthGlobal = createSlice({
  name: "second",
  initialState,
  reducers: {
    changeToggleToTrue: (state: any)=>{
      state.toggle = true
    },
    changeToggleToFalse: (state: any)=>{
      state.toggle = false
    },
    signUserGlobal: (state: any, {payload}: any)=>{
      state.user = payload
    },
    logOut: (state: any)=>{
      state.user = null
    }
  }
});

export const {changeToggleToFalse, changeToggleToTrue, signUserGlobal, logOut} = AuthGlobal.actions

export default AuthGlobal.reducer
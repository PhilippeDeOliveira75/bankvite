import { configureStore, createSlice } from "@reduxjs/toolkit"
import { getProfile } from "@services/apiCaller"

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isAuthenticated: localStorage.getItem("token") ? true : false,
    data: localStorage.getItem("token")
      ? await getProfile(localStorage.getItem("token"))
      : null,
  },
  
  reducers: {
    
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    },

    setNames: (state, action) => {
      state.data = action.payload
    },

    removeGlobal: (state, action) => {
      state.isAuthenticated = false
      state.data = null
    },
  },
})

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
})

export default store

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle', // to manage loading state
  error: null ,
  userData:null,
  product:[]   ,
  items:[]  // to store error information
};

// Define a thunk function for signing up a user
export const signUpUser = createAsyncThunk(
  'user/signUp',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3000/api/user/user-register', userData);
      return response.data;
       // Assuming the response contains user data or a success message
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // Return error response data
    }
  }
);
export const getProducts=createAsyncThunk('products',async (_,thunkAPI)=> {

  const response=await axios.get('http://localhost:3000/api/user/product');
  return response.data;


})
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
increment:(state,action)=>{
    

},
addToCart:(state,action)=>{

  state.items.push(action.payload);


},
removeFromCart:(state,action)=>{
  state.items=state.items.filter(item=>item.id!==action.payload.id)

}

  },
  extraReducers: builder => {
    // Handle pending, fulfilled, and rejected actions for signUpUser
    builder.addCase(signUpUser.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.status = 'idle';
      state.userData=action.payload;
      console.log("ok",state.userData)
      // For example, you might update state with user data or show a success message
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.status = 'idle';
      state.error = action.payload; // Store error information
    });
    builder.addCase(getProducts.pending,state=>{
      state.status='loading'
    })
    builder.addCase(getProducts.fulfilled,(state,action)=>{
      state.status='idle';
      state.product=action.payload;
    })
    builder.addCase(getProducts.rejected,(state,action)=>{
     state.status='idle';
     state.error=action.payload;
    })
  }
});

export const {addToCart,removeFromCart}=userSlice.actions;
export default userSlice.reducer;
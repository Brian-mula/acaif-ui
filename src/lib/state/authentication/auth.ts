import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookie from 'js-cookie';
import toast from "react-hot-toast";

interface InitialStateType{
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    token:string | null;

}

const initialState:InitialStateType = {
    loading: 'idle',
    token: null,
}
export const login = createAsyncThunk('auth/login', async (data: {email:string, password:string}, {rejectWithValue}) => {
    try {
        const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log(response);
        const res = await response.json();
        
        if(!response.ok){
            return rejectWithValue(res.message)
        }
        return res;
    } catch (error) {
        return rejectWithValue(error)
        
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        // handle loading state
        builder.addCase(login.pending, (state) => {
            state.loading = 'pending'
        })
        // handle success state
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.token = action.payload.token;
            Cookie.set('token', action.payload.token);
            toast.success('Login success');
        })
        // handle failed state
        builder.addCase(login.rejected, (state, action) => {
            state.loading = 'failed';
            toast.error(action.payload as string);
        })
    }
})

export default authSlice.reducer;
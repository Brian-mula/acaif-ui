import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookie from 'js-cookie';
import toast from "react-hot-toast";

interface InitialStateType{
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    campaigns: CompaignType[];

}

const initialState:InitialStateType = {
    loading: 'idle',
    campaigns: [],
}
export const fetchCompaigns = createAsyncThunk('campaign/fetchAll', async (_, {rejectWithValue}) => {
    try {
        const response = await fetch('http://localhost:3001/compaigns', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Cookie.get('token')}`
            },
           
        });
        console.log(response);
        const res = await response.json();
        console.log(res);
        
        if(!response.ok){
            return rejectWithValue(res.message)
        }
        return res;
    } catch (error) {
        return rejectWithValue(error)
        
    }
})

const campaignsSlice = createSlice({
    name: 'campaigns',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        // handle loading state
        builder.addCase(fetchCompaigns.pending, (state) => {
            state.loading = 'pending'
        })
        // handle success state
        builder.addCase(fetchCompaigns.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.campaigns = action.payload;
          
        })
        // handle failed state
        builder.addCase(fetchCompaigns.rejected, (state, action) => {
            state.loading = 'failed';
            toast.error(action.payload as string);
        })
    }
})

export default campaignsSlice.reducer;
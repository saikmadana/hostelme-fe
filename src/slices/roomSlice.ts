import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Assets
import { BASE_API_URL } from '../utils/constants';

export interface Room {
  id: number
  picture: string
  rent: number
  type: string
  sharing: number
  desc: string
}

interface RoomState {
  rooms: Room[]
  loading: boolean
  error: string | null
}

const initialState: RoomState = {
  rooms: [],
  loading: false,
  error: null
};

export const fetchRooms = createAsyncThunk<Room[]>(
  'rooms/fetchRooms',
  async () => {
    const response = await fetch(
      `${BASE_API_URL}/dummyapi/rooms`
    );
    return await response.json();
  }
);

const postsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  }
});

export default postsSlice.reducer;

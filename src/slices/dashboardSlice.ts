import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Redux
import { Room } from './roomSlice';
import { Tenant } from './tenantSlice';

// Assets
import { BASE_API_URL } from '../utils/constants';

interface DashboardState {
  rooms: Room[]
  tenants: Tenant[]
  loading: boolean
  error: string | null
}

const initialState: DashboardState = {
  rooms: [],
  tenants: [],
  loading: false,
  error: null
};

export const fetchDashboard = createAsyncThunk<{rooms: Room[], tenants: Tenant[]}>(
  'dashboard/fetchDashboard',
  async () => {
    const response = await fetch(
      `${BASE_API_URL}/dummyapi/db`
    );
    return await response.json();
  }
);

const tenantsSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.tenants = action.payload.tenants;
        state.rooms = action.payload.rooms;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  }
});

export default tenantsSlice.reducer;

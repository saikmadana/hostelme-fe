import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Assets
import { BASE_API_URL } from '../utils/constants';

export interface Tenant {
  id: number
  name: string
  designation: string
  city: string
  phone: number
  email: string
  room: number
  joindate: string
  picture: string
}

interface TenantState {
  tenants: Tenant[]
  loading: boolean
  error: string | null
}

const initialState: TenantState = {
  tenants: [],
  loading: false,
  error: null
};

export const fetchTenants = createAsyncThunk<Tenant[]>(
  'tenants/fetchTenants',
  async () => {
    const response = await fetch(
      `${BASE_API_URL}/dummyapi/tenants`
    );
    return await response.json();
  }
);

const tenantsSlice = createSlice({
  name: 'tenants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTenants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTenants.fulfilled, (state, action) => {
        state.loading = false;
        state.tenants = action.payload;
      })
      .addCase(fetchTenants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  }
});

export default tenantsSlice.reducer;

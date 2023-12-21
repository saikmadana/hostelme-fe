import { configureStore } from '@reduxjs/toolkit';

import roomSlice from './slices/roomSlice';
import tenantSlice from './slices/tenantSlice';
import dashboardSlice from './slices/dashboardSlice';

const store = configureStore({
  reducer: {
    rooms: roomSlice,
    tenants: tenantSlice,
    dashboard: dashboardSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

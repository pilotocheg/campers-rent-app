import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCampers, getCamperDetails } from './campers-ops';
import type { Camper } from '@/lib/api/campers';

interface CampersState {
  items: Camper[];
  allItemsLoaded: boolean;
  currentCamper: Camper | null;
  loading: boolean;
  error: string | null;
}

const initialState: CampersState = {
  items: [],
  allItemsLoaded: false,
  currentCamper: null,
  loading: false,
  error: null,
};

const handlePending = (state: CampersState) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (
  state: CampersState,
  action: PayloadAction<unknown>,
) => {
  state.loading = false;
  state.error =
    action.payload instanceof Error
      ? action.payload.message
      : 'An error occurred';
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    resetCamperState: () => initialState,
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, action) => {
        const { items, total, reset } = action.payload;

        state.loading = false;
        const newItems = reset ? items : [...state.items, ...items];
        state.items = newItems;
        state.allItemsLoaded = total <= newItems.length;
      })
      .addCase(getCampers.rejected, handleRejected)
      .addCase(getCamperDetails.pending, handlePending)
      .addCase(getCamperDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCamper = action.payload;
      })
      .addCase(getCamperDetails.rejected, handleRejected);
  },
});

export const { resetCamperState, resetError } = campersSlice.actions;

export default campersSlice.reducer;

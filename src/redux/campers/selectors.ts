import type { RootState } from '../store';

export const selectCampers = (state: RootState) => state.campers.items;
export const selectCurrentCamper = (state: RootState) =>
  state.campers.currentCamper;
export const selectCampersLoading = (state: RootState) => state.campers.loading;
export const selectCampersError = (state: RootState) => state.campers.error;
export const selectAllItemsLoaded = (state: RootState) =>
  state.campers.allItemsLoaded;

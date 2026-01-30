import type { RootState } from '../store';

export const selectFilters = (state: RootState) => state.filters;
export const selectLocation = (state: RootState) => state.filters.location;
export const selectType = (state: RootState) => state.filters.type;
export const selectEquipment = (state: RootState) => state.filters.equipment;

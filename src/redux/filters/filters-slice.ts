import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { EquipmentId, VehicleTypeId } from '@/lib/constants';

interface EquipmentState {
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}

interface FiltersState {
  location: string;
  type: VehicleTypeId | '';
  equipment: EquipmentState;
}

const initialState: FiltersState = {
  location: '',
  type: '',
  equipment: {
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setType: (state, action: PayloadAction<VehicleTypeId>) => {
      state.type = state.type === action.payload ? '' : action.payload;
    },
    toggleEquipment: (state, action: PayloadAction<EquipmentId>) => {
      const equipment = action.payload;
      state.equipment[equipment] = !state.equipment[equipment];
    },
    resetFilters: () => initialState,
  },
});

export const { setLocation, setType, toggleEquipment, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;

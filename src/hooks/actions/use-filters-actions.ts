'use client';

import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import {
  setLocation as setLocationAction,
  setType as setTypeAction,
  toggleEquipment as toggleEquipmentAction,
  resetFilters as resetFiltersAction,
} from '@/redux/filters/filters-slice';
import type { AppDispatch } from '@/redux/store';
import type { EquipmentId, VehicleTypeId } from '@/lib/constants';

export function useFiltersActions() {
  const dispatch = useDispatch<AppDispatch>();

  const setLocation = useCallback(
    (location: string) => {
      dispatch(setLocationAction(location));
    },
    [dispatch],
  );

  const setType = useCallback(
    (type: VehicleTypeId) => {
      dispatch(setTypeAction(type));
    },
    [dispatch],
  );

  const toggleEquipment = useCallback(
    (equipmentKey: EquipmentId) => {
      dispatch(toggleEquipmentAction(equipmentKey));
    },
    [dispatch],
  );

  const resetFilters = useCallback(() => {
    dispatch(resetFiltersAction());
  }, [dispatch]);

  return { setLocation, setType, toggleEquipment, resetFilters };
}

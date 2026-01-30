'use client';

import { useRootSelector } from '../use-root-selector';
import { selectType } from '@/redux/filters/selectors';

export const useSelectedVehicleType = () => useRootSelector(selectType);

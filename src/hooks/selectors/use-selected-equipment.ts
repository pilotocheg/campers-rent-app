'use client';

import { useRootSelector } from '../use-root-selector';
import { selectEquipment } from '@/redux/filters/selectors';

export const useSelectedEquipment = () => useRootSelector(selectEquipment);

'use client';

import { useRootSelector } from '../use-root-selector';
import { selectCampers } from '@/redux/campers/selectors';

export const useCampers = () => useRootSelector(selectCampers);

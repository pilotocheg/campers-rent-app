'use client';

import { useRootSelector } from '../use-root-selector';
import { selectCurrentCamper } from '@/redux/campers/selectors';

export const useCurrentCamper = () => useRootSelector(selectCurrentCamper);

'use client';

import { useRootSelector } from '../use-root-selector';
import { selectLocation } from '@/redux/filters/selectors';

export const useLocation = () => useRootSelector(selectLocation);

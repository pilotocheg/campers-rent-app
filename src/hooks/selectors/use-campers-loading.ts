'use client';

import { useRootSelector } from '../use-root-selector';
import { selectCampersLoading } from '@/redux/campers/selectors';

export const useCampersLoading = () => useRootSelector(selectCampersLoading);

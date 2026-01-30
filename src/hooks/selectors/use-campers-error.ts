'use client';

import { useRootSelector } from '../use-root-selector';
import { selectCampersError } from '@/redux/campers/selectors';

export const useCampersError = () => useRootSelector(selectCampersError);

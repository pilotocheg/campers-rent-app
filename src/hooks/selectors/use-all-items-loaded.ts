'use client';

import { useRootSelector } from '../use-root-selector';
import { selectAllItemsLoaded } from '@/redux/campers/selectors';

export const useAllItemsLoaded = () => useRootSelector(selectAllItemsLoaded);

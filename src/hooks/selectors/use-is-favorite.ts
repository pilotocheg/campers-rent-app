'use client';

import { useRootSelector } from '../use-root-selector';
import { selectIsFavorite } from '@/redux/favorites/selectors';

export const useIsFavorite = (camperId: string) =>
  useRootSelector((state) => selectIsFavorite(state, camperId));

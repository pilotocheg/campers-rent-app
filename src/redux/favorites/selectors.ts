import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const selectFavorites = (state: RootState) => state.favorites.items;
export const selectIsFavorite = createSelector(
  [selectFavorites, (_: RootState, camperId: string) => camperId],
  (favorites, camperId) => favorites.includes(camperId),
);

import { useCallback } from 'react';

import { toggleFavorite as toggleFavoriteAction } from '@/redux/favorites/favorites-slice';

import { useAppDispatch } from '../use-app-dispatch';

export function useFavoritesActions() {
  const dispatch = useAppDispatch();

  const toggleFavorite = useCallback(
    (camperId: string) => {
      dispatch(toggleFavoriteAction(camperId));
    },
    [dispatch],
  );

  return { toggleFavorite };
}

'use client';

import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import {
  getCampers as getCampersAction,
  getCamperDetails as getCamperDetailsAction,
} from '@/redux/campers/campers-ops';
import { resetCamperState } from '@/redux/campers/campers-slice';
import type { AppDispatch } from '@/redux/store';

export function useCampersActions() {
  const dispatch = useDispatch<AppDispatch>();

  const getCampers = useCallback(
    (reset: boolean) => {
      dispatch(getCampersAction({ reset }));
    },
    [dispatch],
  );

  const resetCampers = useCallback(() => {
    dispatch(resetCamperState());
  }, [dispatch]);

  const getCamperDetails = useCallback(
    (camperId: string) => {
      dispatch(getCamperDetailsAction(camperId));
    },
    [dispatch],
  );

  return { getCampers, resetCampers, getCamperDetails };
}

'use client';

import toast from 'react-hot-toast';
import { useEffect } from 'react';

import { useCampersError } from '@/hooks/selectors/use-campers-error';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { resetError } from '@/redux/campers/campers-slice';

export function useErrorNotification() {
  const error = useCampersError();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetError());
    }
  }, [error, dispatch]);
}

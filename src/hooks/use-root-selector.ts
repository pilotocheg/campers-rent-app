'use client';

import { useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '@/redux/store';

export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperDetails, Camper } from '@/lib/api/campers';
import { PAGE_SIZE } from '@/lib/constants';
import { RootState } from '../store';

interface GetCampersPayload {
  reset?: boolean;
}

interface GetCampersResult {
  items: Camper[];
  total: number;
  reset: boolean;
}

export const getCampers = createAsyncThunk<GetCampersResult, GetCampersPayload>(
  'campers/getCampers',
  async ({ reset = false }, { getState }) => {
    const { filters, campers } = getState() as RootState;

    const params: Record<string, unknown> = {
      limit: PAGE_SIZE,
      page: reset ? 1 : campers.items.length / PAGE_SIZE + 1,
    };

    if (filters.location) {
      params.location = filters.location;
    }

    if (filters.type) {
      params.form = filters.type;
    }

    // Add equipment filters
    Object.keys(filters.equipment).forEach((key) => {
      if (filters.equipment[key as keyof typeof filters.equipment]) {
        params[key] = true;
      }
    });

    const { items, total } = await fetchCampers(params);
    return { items, total, reset };
  },
);

export const getCamperDetails = createAsyncThunk<Camper, string>(
  'campers/getCamperDetails',
  fetchCamperDetails,
);

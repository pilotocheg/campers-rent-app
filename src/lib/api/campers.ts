import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

interface FetchOptions {
  errorTitle: string;
  params?: Record<string, unknown>;
}

const makeFetch = async <T>(
  url: string,
  { errorTitle, ...options }: FetchOptions,
): Promise<T> => {
  try {
    const response = await axios.get<T>(url, options);
    return response.data;
  } catch (error) {
    // TODO: Implement proper error handling
    console.error(`${errorTitle}:`, error);
    throw error;
  }
};

export interface CamperImage {
  thumb: string;
  original: string;
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: CamperImage[];
  reviews: Review[];
}

interface CampersResponse {
  items: Camper[];
  total: number;
}

export const fetchCampers = (
  params: Record<string, unknown> = {},
): Promise<CampersResponse> =>
  makeFetch('/campers', {
    errorTitle: 'Error fetching campers',
    params,
  });

export const fetchCamperDetails = (camperId: string): Promise<Camper> =>
  makeFetch(`/campers/${camperId}`, {
    errorTitle: 'Error fetching camper details',
  });

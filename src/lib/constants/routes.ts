export enum Routes {
  HOME = '/',
  CATALOG = '/catalog',
  LOGIN = '/login',
  REGISTER = '/register',
  AUTH_CALLBACK = '/auth/callback',
}

/**
 * Generate a dynamic route for camper details
 */
export const getCamperRoute = (camperId: string) =>
  `${Routes.CATALOG}/${camperId}` as const;

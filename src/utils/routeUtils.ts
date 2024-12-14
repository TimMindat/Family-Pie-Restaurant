import { NavigateFunction } from 'react-router-dom';

export const handleInvalidRoute = (navigate: NavigateFunction) => {
  // Preserve query parameters
  const currentUrl = new URL(window.location.href);
  const searchParams = currentUrl.search;
  
  // Navigate to 404 page with preserved query parameters
  navigate(`/404${searchParams}`, { replace: true });
};

export const isValidRoute = (path: string): boolean => {
  const validRoutes = ['/', '/menu', '/visual-menu', '/404'];
  return validRoutes.includes(path);
};
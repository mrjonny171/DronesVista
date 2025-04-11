import { NavigateFunction } from 'react-router-dom';

/**
 * Utility function to navigate to a route and scroll to the top of the page
 * @param navigate - The navigate function from useNavigate hook
 * @param path - The path to navigate to
 */
export const navigateAndScrollTop = (navigate: NavigateFunction, path: string) => {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
  // Navigate to the specified path
  navigate(path);
}; 
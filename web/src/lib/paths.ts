/**
 * Utility functions for handling paths with basePath for GitHub Pages
 */

/**
 * Get the base path for static assets (empty in dev, /remova2 in GitHub Pages)
 */
export function getBasePath(): string {
  // Check if we're on GitHub Pages by detecting the pathname
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    // If pathname starts with /remova2, we're on GitHub Pages
    if (pathname.startsWith('/remova2')) {
      return '/remova2';
    }
    // If we're on localhost or the root domain, no basePath
    return '';
  }
  // Server-side: check environment variable or default to empty
  // For static export, this will be empty since it's client-side only
  return '';
}

/**
 * Get the full path for a static asset (prepends basePath if needed)
 */
export function getAssetPath(path: string): string {
  const basePath = getBasePath();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  // URL encode spaces in the path
  const encodedPath = normalizedPath.replace(/ /g, '%20');
  return `${basePath}${encodedPath}`;
}


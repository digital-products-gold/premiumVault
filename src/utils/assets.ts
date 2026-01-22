/**
 * Helper function to get the correct asset path for production builds
 * Automatically prepends the base URL configured in vite.config.ts
 */
export const getAssetPath = (path: string): string => {
    const base = import.meta.env.BASE_URL || '/';
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${base}${cleanPath}`;
};

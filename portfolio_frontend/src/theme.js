export const THEME_VARS = {
  primary: '#1a73e8',
  accent: '#ff6f61',
  secondary: '#23282d'
};

// PUBLIC_INTERFACE
export function getPublicSiteUrl() {
  /**
   * Returns the public site URL from the environment.
   * This can be used to construct absolute links (e.g., resume).
   * Requires REACT_APP_SITE_URL to be set in .env by the user/environment.
   */
  return process.env.REACT_APP_SITE_URL || '';
}

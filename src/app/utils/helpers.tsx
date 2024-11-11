const keycloakBaseUrl = import.meta.env.VITE_REACT_APP_AUTHORISATION_CODE_URL;
const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;
const redirectUri = import.meta.env.VITE_REACT_APP_REDIRECT_URI;
const publicUris = import.meta.env.VITE_PUBLIC_URLS;

export const generateKeycloakRedirectionUri = (): string => {
  const loginUrl = `${keycloakBaseUrl}?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}`;
  return loginUrl;
};

export const redirectToKeycloak = (): void => {
  window.location.href = generateKeycloakRedirectionUri();
};

export const getPublicUrls = (): string[] => {
  return publicUris ? publicUris.split(",") : [];
};

export const isPublicUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  const publicUrls = getPublicUrls();
  return publicUrls.some((publicUrl) => url.includes(publicUrl));
};




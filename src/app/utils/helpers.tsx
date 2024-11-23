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

export const generateColorFromLetters = (
  letter1: string,
  letter2: string
): string => {
  // Ensure the letters are uppercase
  const combined = (letter1 + letter2).toUpperCase();

  // Use a simple hash function to convert letters to a numeric value
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash += combined.charCodeAt(i);
  }

  // Generate RGB values based on the hash
  const r = (hash * 37) % 256; // Ranges from 0 to 255
  const g = (hash * 74) % 256; // Ranges from 0 to 255
  const b = (hash * 111) % 256; // Ranges from 0 to 255

  // Convert RGB to Hex
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, "0")}`;
  return hex;
};

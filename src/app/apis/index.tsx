import api from "../utils/api";

export async function getToken(code: string, redirectUri: string) {
  const data = {
    code: code,
    redirectUri: redirectUri,
  };
  return await api.post(`/auth/token`, data);
}

export async function refreshToken() {
  return await api.post(`/auth/refresh`, {}, { withCredentials: true });
}

export async function logout() {
  return await api.post(`/auth/logout`, {}, { withCredentials: true });
}

export async function getdetails() {
  return await api.get(`/dashboard/bar_chart`);
}

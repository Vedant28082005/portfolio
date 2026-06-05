// Simple client-side auth for static portfolio admin
// Credentials are intentionally hardcoded since this is a static site with no backend.

const ADMIN_USER = 'vedant';
const ADMIN_PASS = 'Vedant@123';
const SESSION_KEY = 'admin_session';

export function login(username: string, password: string): boolean {
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    sessionStorage.setItem(SESSION_KEY, 'true');
    return true;
  }
  return false;
}

export function logout() {
  sessionStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === 'true';
}

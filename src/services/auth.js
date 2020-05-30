export const TOKEN_KEY = '@amarq-me-Token';
export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token !== null && token !== undefined && token !== 'null' && token !== 'undefined';
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

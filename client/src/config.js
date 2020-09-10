export const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';
export const imageUrl = `${baseUrl}`;
export const apiUrl = `${baseUrl}/api`;
export const usersUrl = `${apiUrl}/users/`;
export const loginUrl = `${apiUrl}/users/login`;
export const restoreUrl = `${apiUrl}/users/login/restore`;

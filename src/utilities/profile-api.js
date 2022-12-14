import sendRequest from "./send-request";
const BASE_URL = '/api/profiles';

export async function create(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function getProfile(user) {
  return sendRequest(`${BASE_URL}/${user}`);
}

export async function addFavorite(user, driver) {
  return sendRequest(`${BASE_URL}/${user}/drivers/${driver}`, 'POST');
}
import sendRequest from "./send-request";
const BASE_URL = '/api/profiles';

export async function create(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}
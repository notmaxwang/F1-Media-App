import sendRequest from "./send-request";
const BASE_URL = '/api/teams';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getByName(name) {
  return sendRequest(`${BASE_URL}/:${name}`);
}
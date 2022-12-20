import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function addPost(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}
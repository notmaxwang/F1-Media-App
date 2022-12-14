import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function addPost(userData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', userData);
}

export async function deletePost(postId) {
  return sendRequest(`${BASE_URL}/${postId}`, 'DELETE');
}

export async function updatePost(postId, updatedContent) {
  return sendRequest(`${BASE_URL}/${postId}`, 'PUT', updatedContent);
}
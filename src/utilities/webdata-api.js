import sendRequest from "./send-request";
const BASE_URL = '/api/webdata';

export async function getRaceResults() {
  return sendRequest(BASE_URL);
}
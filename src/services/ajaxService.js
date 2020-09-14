import axios from "axios";

export const HttpMethod = {
  POST: 'post',
  GET: 'get'
}

const sendRequest = async (requestURL, method = "get", data, requestType = "json") => {
  axios.defaults.baseURL = 'https://api.covid19api.com';

  return await axios({
    method: method,
    url: requestURL,
    responseType: requestType,
    data: data,
  }).then(res => {
    return res;
  }).catch(res => {
    // Unhandled error
  }).finally(() => {
    // Finally
  });
}

export const httpGet = async (url, reqData, reqType = "json") =>
  await sendRequest(url, HttpMethod.GET, reqData, reqType);

export const httpPost = async (url, reqData, reqType = "json") =>
  await sendRequest(url, HttpMethod.POST, reqData, reqType);
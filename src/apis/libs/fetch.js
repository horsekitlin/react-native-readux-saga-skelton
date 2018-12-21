import QS from "query-string";
import _ from "lodash";

const defaultHeaders = {
  "Content-Type": "application/json"
};

const parseResponse = response => {
  const { status: statusCode, ok } = response;
  return response.json().then(result => ({
    statusCode,
    ok,
    result
  }));
};

export const fetchGetWithToken = (url, customHeaders, payload = {}) => {
  const realUrl = _.isEmpty(payload)
    ? url
    : `${url}?${QS.stringify(payload)}`;

  return fetch(realUrl, {
    method: "GET",
    headers: {
      ...customHeaders
    }
  }).then(parseResponse);
};

export const fetchPostWithToken = (
  url,
  customHeaders,
  payload = {},
  qs = {},
  method = "POST"
) => {
  const realUrl = _.isEmpty(qs)
    ? url
    : `${url}?${QS.stringify(qs)}`;

  return fetch(realUrl, {
    method,
    headers: { ...defaultHeaders, ...customHeaders },
    body: JSON.stringify(payload)
  }).then(parseResponse);
};

export const fetchPutWithToken = (
  url,
  customHeaders,
  payload = {},
  qs = {},
  method = "PUT"
) => {
  const realUrl = Utils.isEmpty(qs)
    ? url
    : `${url}?${QS.stringify(qs)}`;

  return fetch(realUrl, {
    method,
    headers: { ...defaultHeaders, ...customHeaders },
    body: JSON.stringify(payload)
  }).then(parseResponse);
};

export const fetchPost = (url, payload) => {
  return fetch(url, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(payload)
  }).then(parseResponse);
};
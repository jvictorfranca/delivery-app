import { backendUrl } from '../URLs';

const AcceptString = 'application/json';

export const getBackEndRequest = async (path) => {
  let answer = await fetch(`${backendUrl}${path}`);
  answer = await answer.json();
  return answer;
};

export const postSalesBackEndRequest = async (path, body, token) => {
  const myInit = {
    method: 'POST',
    headers: { Authorization: token,
      Accept: AcceptString,
      'Content-Type': AcceptString },
    body: JSON.stringify(body),
  };
  let answer = await fetch(`${backendUrl}${path}`, myInit);
  answer = await answer.json();
  return answer;
};

export const putSalesStatusBackEndRequest = async (path, status, token) => {
  const myInit = {
    method: 'PUT',
    headers: { Authorization: token,
      Accept: AcceptString,
      'Content-Type': AcceptString },
    body: JSON.stringify(status),
  };
  let answer = await fetch(`${backendUrl}${path}`, myInit);
  answer = await answer.json();
  return answer;
};

export default getBackEndRequest;

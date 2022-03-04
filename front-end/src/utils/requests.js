import { backendUrl } from '../URLs';

export const getBackEndRequest = async (path) => {
  let answer = await fetch(`${backendUrl}${path}`);
  answer = await answer.json();
  return answer;
};

export const postSalesBackEndRequest = async (path, body, token) => {
  const myInit = {
    method: 'POST',
    headers: { Authorization: token,
      Accept: 'application/json',
      'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  let answer = await fetch(`${backendUrl}${path}`, myInit);
  answer = await answer.json();
  return answer;
};

export default getBackEndRequest;

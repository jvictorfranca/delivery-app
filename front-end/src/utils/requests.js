const backendURL = 'http://localhost:3001';

export const getBackEndRequest = async (path) => {
  let answer = await fetch(`${backendURL}${path}`);
  answer = await answer.json();
  return answer;
};

export default getBackEndRequest;

export default async function fetchToken() {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  return data;
}
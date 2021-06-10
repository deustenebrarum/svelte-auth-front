//Placeholder example

const ghAuthURL = 'https://github.com/login/oauth/authorize'
const clientId = '294a52dfa562ba508f75';

export async function get() {
  const sessionId = '999';
  return {
    status: 302,
    headers: {
      location: `${ghAuthURL}?client_id=${clientId}&state=${sessionId}`
    }
  }
}
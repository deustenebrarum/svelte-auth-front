import fetch from 'node-fetch';
const tokenURL = 'https://github.com/login/oauth/access_token';
const userURL = 'https://api.github.com/user';

const clientId = '294a52dfa562ba508f75';
const secret = 'f746c16be1db9fb5536d6d8532dcdb14c8c95232';

export async function get(req) {
  const code = req.query.get('code');
  const accessToken = await getAccessToken(code);
  const user = await getUser(accessToken);

  // this mutates the locals object on the request
  // and will be read by the hooks/handle function
  // after the resolve
  req.locals.user = user.login;

  return {
    status: 302,
    headers: {
      location: '/'
    }
  }
}

function getAccessToken(code) {
  return fetch(tokenURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: secret,
      code
    })
  }).then(r => r.json())
    .then(r => r.access_token)
}

function getUser(accessToken) {
  return fetch(userURL, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  }).then(r => r.json())
}
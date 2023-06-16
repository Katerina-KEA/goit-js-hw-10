export default function getCats() {
  const URL_API =
    'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_aTdozMYhj8EW2RUf1PMw45VVVFqfbTQsUWcmhcTLEjwwF3FVxPGXvCRYAPCf4ZTD';

  return fetch(URL_API).then(resp => {
   
    return resp.json();
  });
}

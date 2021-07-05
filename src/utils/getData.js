const getData = api => {
  return fetch(api)
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
};

export default getData;

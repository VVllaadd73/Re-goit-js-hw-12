// src/js/pixabay-api.js

import axios from 'axios';

const param = [
   { name: 'key', value: '52802727-e127d4f3f7eb26b70bb46f136' },
   { name: 'image_type', value: 'all' },
   { name: 'orientation', value: 'all' },
   { name: 'safesearch', value: true }
];

const url = `https://pixabay.com/api/?${param
   .map(({ name, value }) => `${name}=${value}`)
   .join('&')}`;

export function getImagesByQuery(query, nPage, cHits = 20) {
   const res = axios
      .get(`${url}&per_page=${cHits}&page=${nPage}&q=${query}`)
      .then(({ data }) => data)
      .catch(err => console.log(err));
   return res;
}

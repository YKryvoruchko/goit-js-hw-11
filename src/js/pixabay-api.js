import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54231751-132efb34a356b2aedfd75411f';

export function getImages(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data;
    });
}
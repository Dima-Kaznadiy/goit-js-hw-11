import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54252525-58ca19d218db43072309044ad';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}

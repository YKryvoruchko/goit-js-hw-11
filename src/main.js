import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.warning({ message: 'Please enter a search query' });
    return;
  }

  clearGallery();
  showLoader();

  getImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({ message: 'Something went wrong. Please try again later.' });
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
});
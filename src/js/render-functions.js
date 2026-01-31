import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a');


export function clearGallery() {
  gallery.innerHTML = '';
}


export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <div class="info">
          <p>❤️ ${image.likes}</p>
          <p>👁 ${image.views}</p>
          <p>💬 ${image.comments}</p>
          <p>⬇ ${image.downloads}</p>
        </div>
      </li>
      `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}


export function showLoader() {
  document.querySelector('.loader').classList.remove('is-hidden');
}


export function hideLoader() {
  document.querySelector('.loader').classList.add('is-hidden');
}